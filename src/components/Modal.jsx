import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useEffect,
} from "react";
import Button from './Button.jsx'

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const [domIsReady, setDomIsReady] = useState(false);
  const dialog = useRef();

  useEffect(() => {
    setDomIsReady(true);
  }, []);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return domIsReady ? (
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>
  ) : null;
});

export default Modal;
