import SettingIndex from "../components/setting/Index";
import DashboardIndex from "../components/dashboard/Index";
import ProfileIndex from "../components/profile/Index";
import AcademicSyllabusIndex from "../components/academic_syllabus/Index";
import ClassesIndex from "../components/classes/Index";
import MessagingIndex from "../components/messaging/Index";
import StaffsIndex from "../components/staffs/Index";
import GradeIndex from "../components/grade/Index";
import AcademicSessionIndex from "../components/academic_session/Index";
import RoleIndex from "../components/role/Index";
import EExamIndex from "../components/e_exam/Index";
import StudentCreate from "../components/student/Create";
import StudentIndex from "../components/student/Index";
import EResultIndex from "../components/e_result/Index";

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
        title: "Grade",
        path: "/grade",
        exact: true,
        component: GradeIndex,
        protected: true,
    },
    {
        title: "Academic Session",
        path: "/academic-session",
        exact: true,
        component: AcademicSessionIndex,
        protected: true,
    },
    {
        title: "Classes",
        path: "/classes",
        exact: true,
        component: ClassesIndex,
        protected: true,
    },
    {
        title: "E-Exam",
        path: "/e-exam",
        exact: true,
        component: EExamIndex,
        protected: true,
    },
    {
        title: "User Roles",
        path: "/roles",
        exact: true,
        component: RoleIndex,
        protected: true,
    },
    {
        title: "Messaging",
        path: "/messaging",
        exact: true,
        component: MessagingIndex,
        protected: true,
    },
    {
        title: "Staffs",
        path: "/staffs",
        exact: true,
        component: StaffsIndex,
        protected: true,
    },
    {
        title: "E-Result",
        path: "/e-result",
        exact: true,
        component: EResultIndex,
        protected: true,
    },
    {
        title: "Student",
        path: "/students",
        exact: true,
        component: StudentIndex,
        protected: true,
    },
    {
        title: "New Student",
        path: "/student-new",
        exact: true,
        component: StudentCreate,
        protected: true,
    },
];

export default dashboard;
