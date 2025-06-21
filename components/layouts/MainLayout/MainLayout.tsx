import PageHead from "@/components/common/PageHeader/PageHead";
import { ReactNode } from "react";
import MainNavbarLayout from "./MainNavbarLayout";
import MainFooterLayout from "./MainFooterLayout";

interface Proptypes {
  children: ReactNode;
  title: string;
}

const MainLayout = (props: Proptypes) => {
  const { children, title } = props;
  return (
    <>
      <PageHead title={title} />
      <div>
        <MainNavbarLayout />
        <section className="my-5 md:my-10 px-5 md:px-10 min-h-[75vh]">
          {children}
        </section>
        <MainFooterLayout />
      </div>
    </>
  );
};
export default MainLayout;
