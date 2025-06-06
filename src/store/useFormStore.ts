import { create } from "zustand";
import type { FormData } from "../schema";

interface FormState {
  step: number;
  total: number;
  data: FormData;
  setStep: (newStep: number) => void;
  setData: (data: Partial<FormData>) => void;
  resetData: () => void;
}

const defaultData: FormData = {
  mood: "",
  cathedral: "" as FormData["cathedral"],
  speakers: "" as FormData["speakers"],
  feedback: "",
  email: "",
  organization: "",
  filling: "",
  recommendation: "",
};

const useFormStore = create<FormState>()((set) => ({
  step: 0,
  total: 8,
  data: { ...defaultData },
  setStep: (newStep) => set(() => ({ step: newStep })),
  setData: (newData) =>
    set((state) => ({ data: { ...state.data, ...newData } })),
  resetData: () => set(() => ({ data: { ...defaultData } })),
}));

export default useFormStore;
