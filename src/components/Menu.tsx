import React from "react";
import { Button, Menu, MenuItem } from "@mui/material";

interface SimpleMenuProps {
 menuName: string;
 items: {
    label: string;
    path: string;
    component: React.FunctionComponent;
 }[];
}

export const SimpleMenu: React.FunctionComponent<SimpleMenuProps> = ({ 
    menuName,
    items
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  function handleClick(event: React.MouseEvent<HTMLElement>) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        onMouseOver={handleClick}
      >
        {menuName}
      </Button>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        {items.map((item) => (
            <MenuItem key={item.label} onClick={handleClose}>{item.label}</MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default SimpleMenu;