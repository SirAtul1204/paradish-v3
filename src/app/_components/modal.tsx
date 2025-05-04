"use client";
import Button from "./button";

type ModalProps = {
  isOpen: boolean;
  onClose?: () => void;
  heading?: string;
  children: React.ReactNode;
  footerContent?: React.ReactNode;
};

export default function Modal({
  isOpen,
  onClose,
  heading,
  children,
  footerContent,
}: ModalProps) {
  if (!isOpen) {
    return <></>;
  }

  return (
    <div
      role="dialog"
      className="fixed inset-0 z-50 flex items-center justify-center rounded-md backdrop-blur-xs"
    >
      <div className="bg-surface border-border rounded-md border-2 p-4 shadow">
        <div className="border-border mb-4 flex items-center justify-between border-b pb-2">
          {heading && <p className="text-xl">{heading}</p>}
          {onClose && (
            <Button onClick={onClose} mediaOnly media="/dismiss.svg">
              Close
            </Button>
          )}
        </div>
        {children}
        <div className="mt-6">{footerContent}</div>
      </div>
    </div>
  );
}
