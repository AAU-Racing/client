import { NavMenuSubItem } from './nav-menu-sub-item';

export class NavMenuItem {
    public subitems: NavMenuSubItem[];
    
    constructor(name: String, path: String) {

    }

    addSubitem(item: NavMenuSubItem) {
        this.subitems.push(item)
    }
}
