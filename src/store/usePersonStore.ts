import { create } from 'zustand'
import avatarSrc from '../assets/images/avatar.jfif'

interface PersonState {
  name: string
  description: string
  avatarSrc: string
}

const usePersonStore = create<PersonState>()(() => ({
  name: "Nick Avdonkin",
  description: "Менеджер профильных мероприятий",
  avatarSrc: avatarSrc
}))

export default usePersonStore
