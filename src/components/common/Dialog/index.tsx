import { Dialog, DialogPanel } from "@headlessui/react";
import Background from "./Background";

const CustomDialog = ({
  open,
  onClose,
  children,
  className,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <Background>
        <DialogPanel
          className={`w-full max-w-[90%] max-h-[90%] md:max-w-[50%] rounded-3xl border bg-white p-12 ${className}`}
        >
          {children}
        </DialogPanel>
      </Background>
    </Dialog>
  );
};

export default CustomDialog;
