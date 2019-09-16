import {
    Alert as EAlert,
    Aside as EAside,
    Autocomplete as EAutocomplete,
    Badge as EBadge,
    Breadcrumb as EBreadcrumb,
    BreadcrumbItem as EBreadcrumbItem,
    Button as EButton,
    ButtonGroup as EButtonGroup,
    Card as ECard,
    Cascader as ECascader,
    Carousel as ECarousel,
    CarouselItem as ECarouselItem,
    Checkbox as ECheckbox,
    CheckboxButton as ECheckboxButton,
    CheckboxGroup as ECheckboxGroup,
    Col as ECol,
    Collapse as ECollapse,
    CollapseItem as ECollapseItem,
    ColorPicker as EColorPicker,
    Container as EContainer,
    DatePicker as EDatePicker,
    Dialog as EDialog,
    Dropdown as EDropdown,
    DropdownItem as EDropdownItem,
    DropdownMenu as EDropdownMenu,
    Footer as EFooter,
    Form as EForm,
    FormItem as EFormItem,
    Header as EHeader,
    Input as EInput,
    InputNumber as EInputNumber,
    Main as EMain,
    Menu as EMenu,
    MenuItem as EMenuItem,
    MenuItemGroup as EMenuItemGroup,
    Option as EOption,
    OptionGroup as EOptionGroup,
    Pagination as EPagination,
    Popover as EPopover,
    Progress as EProgress,
    Rate as ERate,
    Radio as ERadio,
    RadioButton as ERadioButton,
    RadioGroup as ERadioGroup,
    Row as ERow,
    Select as ESelect,
    Slider as ESlider,
    Step as EStep,
    Steps as ESteps,
    Submenu as ESubmenu,
    Switch as ESwitch,
    Table as ETable,
    TableColumn as ETableColumn,
    Tabs as ETabs,
    TabPane as ETabPane,
    Tag as ETag,
    Timeline as ETimeline,
    TimelineItem as ETimelineItem,
    TimePicker as ETimePicker,
    TimeSelect as ETimeSelect,
    Tooltip as ETooltip,
    Transfer as ETransfer,
    Tree as ETree,
    Upload as EUpload,
    Divider as EDivider,
    Link as ELink,
    Image as EImage,
    Icon as EIcon,
    Calendar as ECalendar,
    Backtop as EBacktop,
    PageHeader as EPageHeader,
    Avatar as EAvatar,
    Drawer as EDrawer,
} from 'element-ui';
import Vue from 'vue';
import { ofType } from 'vue-tsx-support';

type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
type OmitVue<T> = Partial<Omit<T, keyof Vue>>;
interface AnyScopedSlots {
    [key: string]: any;
}

export const Alert = ofType<OmitVue<EAlert>, {}, AnyScopedSlots>().convert(EAlert);
export const Aside = ofType<OmitVue<EAside>, {}, AnyScopedSlots>().convert(EAside);
export const Autocomplete = ofType<OmitVue<EAutocomplete>, {}, AnyScopedSlots>().convert(EAutocomplete);
export const Badge = ofType<OmitVue<EBadge>, {}, AnyScopedSlots>().convert(EBadge);
export const Breadcrumb = ofType<OmitVue<EBreadcrumb>, {}, AnyScopedSlots>().convert(EBreadcrumb);
export const BreadcrumbItem = ofType<OmitVue<EBreadcrumbItem>, {}, AnyScopedSlots>().convert(EBreadcrumbItem);
export const Button = ofType<OmitVue<EButton>, {}, AnyScopedSlots>().convert(EButton);
export const ButtonGroup = ofType<OmitVue<EButtonGroup>, {}, AnyScopedSlots>().convert(EButtonGroup);
export const Card = ofType<OmitVue<ECard>, {}, AnyScopedSlots>().convert(ECard);
export const Cascader = ofType<OmitVue<ECascader>, {}, AnyScopedSlots>().convert(ECascader);
export const Carousel = ofType<OmitVue<ECarousel>, {}, AnyScopedSlots>().convert(ECarousel);
export const CarouselItem = ofType<OmitVue<ECarouselItem>, {}, AnyScopedSlots>().convert(ECarouselItem);
export const Checkbox = ofType<OmitVue<ECheckbox>, {}, AnyScopedSlots>().convert(ECheckbox);
export const CheckboxButton = ofType<OmitVue<ECheckboxButton>, {}, AnyScopedSlots>().convert(ECheckboxButton);
export const CheckboxGroup = ofType<OmitVue<ECheckboxGroup>, {}, AnyScopedSlots>().convert(ECheckboxGroup);
export const Col = ofType<OmitVue<ECol>, {}, AnyScopedSlots>().convert(ECol);
export const Collapse = ofType<OmitVue<ECollapse>, {}, AnyScopedSlots>().convert(ECollapse);
export const CollapseItem = ofType<OmitVue<ECollapseItem>, {}, AnyScopedSlots>().convert(ECollapseItem);
export const ColorPicker = ofType<OmitVue<EColorPicker>, {}, AnyScopedSlots>().convert(EColorPicker);
export const Container = ofType<OmitVue<EContainer>, {}, AnyScopedSlots>().convert(EContainer);
export const DatePicker = ofType<OmitVue<EDatePicker>, {}, AnyScopedSlots>().convert(EDatePicker);
export const Dialog = ofType<OmitVue<EDialog>, {}, AnyScopedSlots>().convert(EDialog);
export const Dropdown = ofType<OmitVue<EDropdown>, {}, AnyScopedSlots>().convert(EDropdown);
export const DropdownItem = ofType<OmitVue<EDropdownItem>, {}, AnyScopedSlots>().convert(EDropdownItem);
export const DropdownMenu = ofType<OmitVue<EDropdownMenu>, {}, AnyScopedSlots>().convert(EDropdownMenu);
export const Footer = ofType<OmitVue<EFooter>, {}, AnyScopedSlots>().convert(EFooter);
export const Form = ofType<OmitVue<EForm>, {}, AnyScopedSlots>().convert(EForm);
export const FormItem = ofType<OmitVue<EFormItem>, {}, AnyScopedSlots>().convert(EFormItem);
export const Header = ofType<OmitVue<EHeader>, {}, AnyScopedSlots>().convert(EHeader);
export const Input = ofType<OmitVue<EInput>, {}, AnyScopedSlots>().convert(EInput);
export const InputNumber = ofType<OmitVue<EInputNumber>, {}, AnyScopedSlots>().convert(EInputNumber);
export const Main = ofType<OmitVue<EMain>, {}, AnyScopedSlots>().convert(EMain);
export const Menu = ofType<OmitVue<EMenu>, {}, AnyScopedSlots>().convert(EMenu);
export const MenuItem = ofType<OmitVue<EMenuItem>, {}, AnyScopedSlots>().convert(EMenuItem);
export const MenuItemGroup = ofType<OmitVue<EMenuItemGroup>, {}, AnyScopedSlots>().convert(EMenuItemGroup);
export const Option = ofType<OmitVue<EOption>, {}, AnyScopedSlots>().convert(EOption);
export const OptionGroup = ofType<OmitVue<EOptionGroup>, {}, AnyScopedSlots>().convert(EOptionGroup);
export const Pagination = ofType<OmitVue<EPagination>, {}, AnyScopedSlots>().convert(EPagination);
export const Popover = ofType<OmitVue<EPopover>, {}, AnyScopedSlots>().convert(EPopover);
export const Progress = ofType<OmitVue<EProgress>, {}, AnyScopedSlots>().convert(EProgress);
export const Rate = ofType<OmitVue<ERate>, {}, AnyScopedSlots>().convert(ERate);
export const Radio = ofType<OmitVue<ERadio>, {}, AnyScopedSlots>().convert(ERadio);
export const RadioButton = ofType<OmitVue<ERadioButton>, {}, AnyScopedSlots>().convert(ERadioButton);
export const RadioGroup = ofType<OmitVue<ERadioGroup>, {}, AnyScopedSlots>().convert(ERadioGroup);
export const Row = ofType<OmitVue<ERow>, {}, AnyScopedSlots>().convert(ERow);
export const Select = ofType<OmitVue<ESelect>, {}, AnyScopedSlots>().convert(ESelect);
export const Slider = ofType<OmitVue<ESlider>, {}, AnyScopedSlots>().convert(ESlider);
export const Step = ofType<OmitVue<EStep>, {}, AnyScopedSlots>().convert(EStep);
export const Steps = ofType<OmitVue<ESteps>, {}, AnyScopedSlots>().convert(ESteps);
export const Submenu = ofType<OmitVue<ESubmenu>, {}, AnyScopedSlots>().convert(ESubmenu);
export const Switch = ofType<OmitVue<ESwitch>, {}, AnyScopedSlots>().convert(ESwitch);
export const Table = ofType<OmitVue<ETable>, {}, AnyScopedSlots>().convert(ETable);
export const TableColumn = ofType<OmitVue<ETableColumn>, {}, AnyScopedSlots>().convert(ETableColumn);
export const Tabs = ofType<OmitVue<ETabs>, {}, AnyScopedSlots>().convert(ETabs);
export const TabPane = ofType<OmitVue<ETabPane>, {}, AnyScopedSlots>().convert(ETabPane);
export const Tag = ofType<OmitVue<ETag>, {}, AnyScopedSlots>().convert(ETag);
export const Timeline = ofType<OmitVue<ETimeline>, {}, AnyScopedSlots>().convert(ETimeline);
export const TimelineItem = ofType<OmitVue<ETimelineItem>, {}, AnyScopedSlots>().convert(ETimelineItem);
export const TimePicker = ofType<OmitVue<ETimePicker>, {}, AnyScopedSlots>().convert(ETimePicker);
export const TimeSelect = ofType<OmitVue<ETimeSelect>, {}, AnyScopedSlots>().convert(ETimeSelect);
export const Tooltip = ofType<OmitVue<ETooltip>, {}, AnyScopedSlots>().convert(ETooltip);
export const Transfer = ofType<OmitVue<ETransfer>, {}, AnyScopedSlots>().convert(ETransfer);
export const Tree = ofType<OmitVue<ETree>, {}, AnyScopedSlots>().convert(ETree);
export const Upload = ofType<OmitVue<EUpload>, {}, AnyScopedSlots>().convert(EUpload);
export const Divider = ofType<OmitVue<EDivider>, {}, AnyScopedSlots>().convert(EDivider);
export const Link = ofType<OmitVue<ELink>, {}, AnyScopedSlots>().convert(ELink);
export const Image = ofType<OmitVue<EImage>, {}, AnyScopedSlots>().convert(EImage);
export const Icon = ofType<OmitVue<EIcon>, {}, AnyScopedSlots>().convert(EIcon);
export const Calendar = ofType<OmitVue<ECalendar>, {}, AnyScopedSlots>().convert(ECalendar);
export const Backtop = ofType<OmitVue<EBacktop>, {}, AnyScopedSlots>().convert(EBacktop);
export const PageHeader = ofType<OmitVue<EPageHeader>, {}, AnyScopedSlots>().convert(EPageHeader);
export const Avatar = ofType<OmitVue<EAvatar>, {}, AnyScopedSlots>().convert(EAvatar);
export const Drawer = ofType<OmitVue<EDrawer>, {}, AnyScopedSlots>().convert(EDrawer);