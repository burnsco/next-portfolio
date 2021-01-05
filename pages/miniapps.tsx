import dynamic from "next/dynamic"

const MiniAppsSection = dynamic(() => import("@sections/MiniApps"))

const MiniAppsPage = () => <MiniAppsSection id="miniapps" />

export default MiniAppsPage
