import SettingIndex from "../components/setting/Index";
import DashboardIndex from "../components/dashboard/Index";
import ProfileIndex from "../components/profile/Index";
import AcademicSyllabusIndex from "../components/academic_syllabus/Index";

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
        component: ProfileIndex,
        protected: true,
    },
    {
        title: "Academic Syllabus",
        path: "/academic-syllabus",
        exact: true,
        component: AcademicSyllabusIndex,
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
