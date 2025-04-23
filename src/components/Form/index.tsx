import { Children, createElement } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ZodObject } from "zod";

import Footer from "../../components/Footer";
import Button from "../../components/Button";
import Typography from "../Typography";

import styles from "./Form.module.css";
import useFormStore from "../../store/useFormStore";
import type { FormData } from "../../schema";

interface Form {
  children:
    | React.ReactElement<{ name: keyof FormData }>
    | React.ReactElement<{ name: keyof FormData }>[];
  title: string;
  schema: ZodObject;
}

export default function Form({ children, title, schema }: Form) {
  const formData = useFormStore((store) => store.data);
  const formStep = useFormStore((store) => store.step);
  const formStepTotal = useFormStore((store) => store.total);
  const setFormData = useFormStore((store) => store.setData);
  const setFormStep = useFormStore((store) => store.setStep);

  const fieldNames = Children.map(children, (child) => child.props.name).filter(
    Boolean
  );
  const defaultValues: Partial<{
    [K in keyof FormData]: FormData[K];
  }> = fieldNames.reduce((acc, fieldName) => {
    acc[fieldName] = formData[fieldName];
    return acc;
  }, {});

  const methods = useForm<Partial<FormData>>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: Partial<typeof formData>) => {
    setFormData(data);
    setFormStep(formStep + 1);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Typography type="title" text={title} />
      {Children.map(children, (child) => {
        return child.props.name
          ? createElement(child.type, {
              ...{
                ...child.props,
                register: methods.register,
                key: child.props.name,
              },
            })
          : child;
      })}
      <Footer withLogo>
        {formStep >= 2 && formStep < formStepTotal ? (
          <Button type="back" />
        ) : (
          <></>
        )}
        {formStep >= 1 && formStep < formStepTotal ? (
          <Button type="next" />
        ) : (
          <></>
        )}
      </Footer>
    </form>
  );
}
