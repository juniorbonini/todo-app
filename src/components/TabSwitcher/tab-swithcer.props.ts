export interface TabSwitcherProps {
  activeTab: "login" | "register";
  onChange: (tab: "login" | "register") => void;
}
