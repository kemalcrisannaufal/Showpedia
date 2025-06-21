import { ReactNode } from "react";

interface Proptypes {
  children: ReactNode;
  id?: string;
}

const AccordionItem = (props: Proptypes) => {
  const { children, id } = props;
  return (
    <div className="px-3 py-2 border-gray-200 w-full" id={id}>
      {children}
    </div>
  );
};

export default AccordionItem;
