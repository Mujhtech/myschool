import SettingIndex from "../components/setting/Index";
import DashboardIndex from "../components/dashboard/Index";

const dashboard = [
    {
        title: "Dashboard",
        path: "/",
        exact: true,
        component: DashboardIndex,
        protected: true,
    },
    {
        title: "Setting",
        path: "/setting",
        exact: true,
        component: SettingIndex,
        protected: true,
    },
    {
        title: "Profile",
        path: "/profile",
        exact: true,
        component: () => <h1>Profile</h1>,
        protected: true,
    },
    {
        title: "Page Not Found",
        path: "*",
        component: () => <div>You are lost</div>,
        protected: false,
    },
];

export default dashboard;
