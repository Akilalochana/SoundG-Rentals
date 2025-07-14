import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { deletePlant } from '@/actions/plant.action';
import toast from 'react-hot-toast';

interface DeleteButtonProps {
  plantId: string;
  plantName: string;
  onDelete?: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ 
  plantId, 
  plantName,
  onDelete 
}) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!confirm(`Are you sure you want to delete ${plantName} from your equipment inventory? This action cannot be undone.`)) {
      return;
    }
    
    setIsDeleting(true);
    try {
      await deletePlant(plantId);
      toast.success(`${plantName} has been deleted successfully!`);
      if (onDelete) onDelete();
    } catch (e) {
      console.error("Error deleting equipment:", e);
      toast.error("Failed to delete equipment. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Button
      variant="destructive"
      size="icon"
      onClick={handleDelete}
      disabled={isDeleting}
    >
      <Trash2 className="h-4 w-4" />
    </Button>
  );
};

export default DeleteButton;
