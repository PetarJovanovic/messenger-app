import React from 'react';
import SidebarWraper from '@/components/sidebar/SidebarWraper';

type Props = React.PropsWithChildren<{}>;

const Layout = ({ children }: Props) => {
  return <SidebarWraper>{children}</SidebarWraper>;
};

export default Layout;
