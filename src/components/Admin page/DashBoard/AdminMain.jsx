import style from "./AdminMain.module.css";
import DashboardMenus from "./DashboardMenus";
import DashAdminMain from "./DashAdminMain";

export default function AdminMain() {
  return (
    <div className={style.dashbordMain}>
      <DashboardMenus />
      <DashAdminMain />
    </div>
  );
}
