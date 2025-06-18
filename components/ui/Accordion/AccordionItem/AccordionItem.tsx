import { ReactNode } from "react";

interface Proptypes {
  children: ReactNode;
}

const AccordionItem = (props: Proptypes) => {
  const { children } = props;
  return (
    <div className="px-3 py-2 border-gray-200 border-b w-full">{children}</div>
  );
};

export default AccordionItem;
