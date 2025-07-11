import Logo from "../../components/Logo";
import Modal from "../../components/Modal";
import UserMenu from "../../components/UserMenu";
import Accounts from "./components/accounts/Accounts";
import DashboardProvider from "./components/DashboardContext";
import Fab from "./components/Fab";
import Transactions from "./components/transactions/Transactions";

function Dashboard() {
  return (
    <DashboardProvider>
      <div className="h-full w-full p-4 md:px-8 md:pb-8 md:pt-6 flex flex-col gap-4 relative">
        <header className="h-12 flex items-center justify-between">
          <Logo className="h-6 text-teal-700" />
          <UserMenu />
        </header>

        <main className="flex-1 flex flex-col md:flex-row gap-4 max-h-full">
          <div className="w-full md:w-1/2">
            <Accounts />
          </div>
          <div className="w-full md:w-1/2">
            <Transactions />
          </div>
        </main>

        <Fab />
        <Modal open title="Filtro">
          <h1>teste</h1>
        </Modal>
      </div>
    </DashboardProvider>
  );
}

export default Dashboard;
