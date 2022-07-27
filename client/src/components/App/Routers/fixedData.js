import PresentersList from "../../pages/PresentersList";
import PresentersSettings from "../../pages/PresentersSettings";
import PresentersSchedule from "../../pages/PresentersSchedule";
import TableList from "../../pages/TableList";
import TableListSettings from '../../pages/TableListSettings';

export const getRouters = () => (
    [
        { path: "/casino/presentors", Component: PresentersList },
        { path: "/casino/presentors/settings", Component: PresentersSettings },
        { path: "/casino/presentors/schedule", Component: PresentersSchedule },
        { path: "/casino/tables", Component: TableList },
        { path: "/casino/tables/settings", Component: TableListSettings }
    ]
);