import { useRef, useState } from 'react';
import Button from './Button';
import Input from './Input';

interface CommentsFormProps {
  slug: string;
}

const CommentsForm = ({ slug }: CommentsFormProps) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState<string | null>();
  const [showSuccessMessage, setShowSuccessMessage] = useState<string | null>();
  const commentElRef = useRef<HTMLTextAreaElement | null>(null);
  const nameElRef = useRef<HTMLInputElement | null>(null);
  const emailElRef = useRef<HTMLInputElement | null>(null);
  const storeDataElRef = useRef();

  const handleSubmitComment = () => {
    setError(false);

    const comment = commentElRef?.current?.value;
    const name = commentElRef?.current?.value;
    const email = commentElRef?.current?.value;

    if (!comment || !name || !email) {
      ///...
    }
  };

  return (
    <div className="shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b border-gray-300 pb-4">
        Leave a comment
      </h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <Input
          textareaRef={commentElRef}
          additionalClasses="p-4"
          placeholder="Comment"
          name="comment"
          textarea
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <Input
          inputRef={nameElRef}
          additionalClasses="p-2 px-4"
          placeholder="Name"
          name="name"
        />
        <Input
          inputRef={emailElRef}
          additionalClasses="p-2 px-4"
          placeholder="Email"
          name="email"
        />
      </div>
      {error && (
        <p className="text-xs text-red-400">All fields are required.</p>
      )}
      <div className="mt-8">
        <Button type="button" onClick={handleSubmitComment}>
          Send
        </Button>
        {showSuccessMessage && (
          <span className="text-xl float-right font-semibold mt-3 text-green-300">
            Comment submitted for review!
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentsForm;
