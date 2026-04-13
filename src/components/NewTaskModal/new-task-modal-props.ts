export interface NewTaskModalProps {
  visible: boolean;
  onClose: () => void;
  onAdd: (description: string) => Promise<void>;
}
