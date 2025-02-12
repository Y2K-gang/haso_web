import { create } from "zustand";
import { ModalProps } from "@/type/modal/modal.type";

const useModalStore = create<ModalProps>((set) => ({
    isOpen: false,
    isClose: () => set({isOpen: false, children: null}),
    children: null,
    openModal: (children) => set({isOpen: true, children}),
}))

export default useModalStore;