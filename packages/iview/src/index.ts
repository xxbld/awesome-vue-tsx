import {
    Affix as IvAffix,
    Alert as IvAlert,
    Anchor as IvAnchor,
    AnchorLink as IvAnchorLink,
    AutoComplete as IvAutoComplete,
    Avatar as IvAvatar,
    BackTop as IvBackTop,
    Badge as IvBadge,
    Breadcrumb as IvBreadcrumb,
    BreadcrumbItem as IvBreadcrumbItem,
    Button as IvButton,
    ButtonGroup as IvButtonGroup,
    Card as IvCard,
    Carousel as IvCarousel,
    CarouselItem as IvCarouselItem,
    Cascader as IvCascader,
    Cell as IvCell,
    CellGroup as IvCellGroup,
    Checkbox as IvCheckbox,
    CheckboxGroup as IvCheckboxGroup,
    Circle as IvCircle,
    Collapse as IvCollapse,
    CollapsePanel as IvCollapsePanel,
    ColorPicker as IvColorPicker,
    Content as IvContent,
    DatePicker as IvDatePicker,
    DatePickerOptions as IvDatePickerOptions,
    Divider as IvDivider,
    Drawer as IvDrawer,
    Dropdown as IvDropdown,
    DropdownMenu as IvDropdownMenu,
    DropdownItem as IvDropdownItem,
    Footer as IvFooter,
    Form as IvForm,
    FormItem as IvFormItem,
    Row as IvRow,
    Col as IvCol,
    Header as IvHeader,
    Icon as IvIcon,
    Input as IvInput,
    InputNumber as IvInputNumber,
    Scroll as IvScroll,
    Split as IvSplit,
    Layout as IvLayout,
    LoadingBar as IvLoadingBar,
    LoadingBarConfig as IvLoadingBarConfig,
    Menu as IvMenu,
    MenuGroup as IvMenuGroup,
    MenuItem as IvMenuItem,
    MenuSub as IvMenuSub,
    Message as IvMessage,
    MessageConfig as IvMessageConfig,
    Modal as IvModal,
    ModalInstance as IvModalInstance,
    ModalConfig as IvModalConfig,
    Notice as IvNotice,
    NoticeConfig as IvNoticeConfig,
    NoticeGlobalConfig as IvNoticeGlobalConfig,
    Page as IvPage,
    Poptip as IvPoptip,
    Progress as IvProgress,
    Radio as IvRadio,
    RadioGroup as IvRadioGroup,
    Rate as IvRate,
    Select as IvSelect,
    Option as IvOption,
    OptionGroup as IvOptionGroup,
    Sider as IvSider,
    Slider as IvSlider,
    Spin as IvSpin,
    Steps as IvSteps,
    StepsStep as IvStepsStep,
    Switch as IvSwitch,
    Table as IvTable,
    TableColumn as IvTableColumn,
    TableRenderCreateElementData as IvTableRenderCreateElementData,
    TableColumnRenderParams as IvTableColumnRenderParams,
    TableColumnRenderHeadParams as IvTableColumnRenderHeadParams,
    TableExportCsvParams as IvTableExportCsvParams,
    Tabs as IvTabs,
    TabPane as IvTabPane,
    Tag as IvTag,
    Time as IvTime,
    Timeline as IvTimeline,
    TimelineItem as IvTimelineItem,
    TimePicker as IvTimePicker,
    Tooltip as IvTooltip,
    Transfer as IvTransfer,
    Tree as IvTree,
    TreeChild as IvTreeChild,
    Upload as IvUpload
} from 'iview';
import Vue from 'vue';
import { ofType } from 'vue-tsx-support';

type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
type OmitVue<T> = Partial<Omit<T, keyof Vue>>;
interface AnyScopedSlots {
    [key: string]: any;
}

export const Affix = ofType<OmitVue<IvAffix>, {}, AnyScopedSlots>().convert(IvAffix);
export const Alert = ofType<OmitVue<IvAlert>, {}, AnyScopedSlots>().convert(IvAlert);
export const Anchor = ofType<OmitVue<IvAnchor>, {}, AnyScopedSlots>().convert(IvAnchor);
export const AnchorLink = ofType<OmitVue<IvAnchorLink>, {}, AnyScopedSlots>().convert(IvAnchorLink);
export const AutoComplete = ofType<OmitVue<IvAutoComplete>, {}, AnyScopedSlots>().convert(IvAutoComplete);
export const Avatar = ofType<OmitVue<IvAvatar>, {}, AnyScopedSlots>().convert(IvAvatar);
export const BackTop = ofType<OmitVue<IvBackTop>, {}, AnyScopedSlots>().convert(IvBackTop);
export const Badge = ofType<OmitVue<IvBadge>, {}, AnyScopedSlots>().convert(IvBadge);
export const Breadcrumb = ofType<OmitVue<IvBreadcrumb>, {}, AnyScopedSlots>().convert(IvBreadcrumb);
export const BreadcrumbItem = ofType<OmitVue<IvBreadcrumbItem>, {}, AnyScopedSlots>().convert(IvBreadcrumbItem);
export const Button = ofType<OmitVue<IvButton>, {}, AnyScopedSlots>().convert(IvButton);
export const ButtonGroup = ofType<OmitVue<IvButtonGroup>, {}, AnyScopedSlots>().convert(IvButtonGroup);
export const Card = ofType<OmitVue<IvCard>, {}, AnyScopedSlots>().convert(IvCard);
export const Carousel = ofType<OmitVue<IvCarousel>, {}, AnyScopedSlots>().convert(IvCarousel);
export const CarouselItem = ofType<OmitVue<IvCarouselItem>, {}, AnyScopedSlots>().convert(IvCarouselItem);
export const Cascader = ofType<OmitVue<IvCascader>, {}, AnyScopedSlots>().convert(IvCascader);
export const Cell = ofType<OmitVue<IvCell>, {}, AnyScopedSlots>().convert(IvCell);
export const CellGroup = ofType<OmitVue<IvCellGroup>, {}, AnyScopedSlots>().convert(IvCellGroup);
export const Checkbox = ofType<OmitVue<IvCheckbox>, {}, AnyScopedSlots>().convert(IvCheckbox);
export const CheckboxGroup = ofType<OmitVue<IvCheckboxGroup>, {}, AnyScopedSlots>().convert(IvCheckboxGroup);
export const Circle = ofType<OmitVue<IvCircle>, {}, AnyScopedSlots>().convert(IvCircle);
export const Collapse = ofType<OmitVue<IvCollapse>, {}, AnyScopedSlots>().convert(IvCollapse);
export const CollapsePanel = ofType<OmitVue<IvCollapsePanel>, {}, AnyScopedSlots>().convert(IvCollapsePanel);
export const ColorPicker = ofType<OmitVue<IvColorPicker>, {}, AnyScopedSlots>().convert(IvColorPicker);
export const Content = ofType<OmitVue<IvContent>, {}, AnyScopedSlots>().convert(IvContent);
export const DatePicker = ofType<OmitVue<IvDatePicker>, {}, AnyScopedSlots>().convert(IvDatePicker);
// export const DatePickerOptions = ofType<OmitVue<IvDatePickerOptions>, {}, AnyScopedSlots>().convert(IvDatePickerOptions);
export const Divider = ofType<OmitVue<IvDivider>, {}, AnyScopedSlots>().convert(IvDivider);
export const Drawer = ofType<OmitVue<IvDrawer>, {}, AnyScopedSlots>().convert(IvDrawer);
export const Dropdown = ofType<OmitVue<IvDropdown>, {}, AnyScopedSlots>().convert(IvDropdown);
export const DropdownMenu = ofType<OmitVue<IvDropdownMenu>, {}, AnyScopedSlots>().convert(IvDropdownMenu);
export const DropdownItem = ofType<OmitVue<IvDropdownItem>, {}, AnyScopedSlots>().convert(IvDropdownItem);
export const Footer = ofType<OmitVue<IvFooter>, {}, AnyScopedSlots>().convert(IvFooter);
export const Form = ofType<OmitVue<IvForm>, {}, AnyScopedSlots>().convert(IvForm);
export const FormItem = ofType<OmitVue<IvFormItem>, {}, AnyScopedSlots>().convert(IvFormItem);
export const Row = ofType<OmitVue<IvRow>, {}, AnyScopedSlots>().convert(IvRow);
export const Col = ofType<OmitVue<IvCol>, {}, AnyScopedSlots>().convert(IvCol);
export const Header = ofType<OmitVue<IvHeader>, {}, AnyScopedSlots>().convert(IvHeader);
export const Icon = ofType<OmitVue<IvIcon>, {}, AnyScopedSlots>().convert(IvIcon);
export const Input = ofType<OmitVue<IvInput>, {}, AnyScopedSlots>().convert(IvInput);
export const InputNumber = ofType<OmitVue<IvInputNumber>, {}, AnyScopedSlots>().convert(IvInputNumber);
export const Scroll = ofType<OmitVue<IvScroll>, {}, AnyScopedSlots>().convert(IvScroll);
export const Split = ofType<OmitVue<IvSplit>, {}, AnyScopedSlots>().convert(IvSplit);
export const Layout = ofType<OmitVue<IvLayout>, {}, AnyScopedSlots>().convert(IvLayout);
// export const LoadingBar = ofType<OmitVue<IvLoadingBar>, {}, AnyScopedSlots>().convert(IvLoadingBar);
// export const LoadingBarConfig = ofType<OmitVue<IvLoadingBarConfig>, {}, AnyScopedSlots>().convert(IvLoadingBarConfig);
export const Menu = ofType<OmitVue<IvMenu>, {}, AnyScopedSlots>().convert(IvMenu);
export const MenuGroup = ofType<OmitVue<IvMenuGroup>, {}, AnyScopedSlots>().convert(IvMenuGroup);
export const MenuItem = ofType<OmitVue<IvMenuItem>, {}, AnyScopedSlots>().convert(IvMenuItem);
export const MenuSub = ofType<OmitVue<IvMenuSub>, {}, AnyScopedSlots>().convert(IvMenuSub);
// export const Message = ofType<OmitVue<IvMessage>, {}, AnyScopedSlots>().convert(IvMessage);
// export const MessageConfig = ofType<OmitVue<IvMessageConfig>, {}, AnyScopedSlots>().convert(IvMessageConfig);
export const Modal = ofType<OmitVue<IvModal>, {}, AnyScopedSlots>().convert(IvModal);
// export const ModalInstance = ofType<OmitVue<IvModalInstance>, {}, AnyScopedSlots>().convert(IvModalInstance);

// export const ModalConfig = ofType<OmitVue<IvModalConfig>, {}, AnyScopedSlots>().convert(IvModalConfig);
// export const Notice = ofType<OmitVue<IvNotice>, {}, AnyScopedSlots>().convert(IvNotice);
// export const NoticeConfig = ofType<OmitVue<IvNoticeConfig>, {}, AnyScopedSlots>().convert(IvNoticeConfig);
// export const NoticeGlobalConfig = ofType<OmitVue<IvNoticeGlobalConfig>, {}, AnyScopedSlots>().convert(IvNoticeGlobalConfig);
export const Page = ofType<OmitVue<IvPage>, {}, AnyScopedSlots>().convert(IvPage);
export const Poptip = ofType<OmitVue<IvPoptip>, {}, AnyScopedSlots>().convert(IvPoptip);
export const Progress = ofType<OmitVue<IvProgress>, {}, AnyScopedSlots>().convert(IvProgress);
export const Radio = ofType<OmitVue<IvRadio>, {}, AnyScopedSlots>().convert(IvRadio);
export const RadioGroup = ofType<OmitVue<IvRadioGroup>, {}, AnyScopedSlots>().convert(IvRadioGroup);
export const Rate = ofType<OmitVue<IvRate>, {}, AnyScopedSlots>().convert(IvRate);
export const Select = ofType<OmitVue<IvSelect>, {}, AnyScopedSlots>().convert(IvSelect);
export const Option = ofType<OmitVue<IvOption>, {}, AnyScopedSlots>().convert(IvOption);
export const OptionGroup = ofType<OmitVue<IvOptionGroup>, {}, AnyScopedSlots>().convert(IvOptionGroup);
export const Sider = ofType<OmitVue<IvSider>, {}, AnyScopedSlots>().convert(IvSider);
export const Slider = ofType<OmitVue<IvSlider>, {}, AnyScopedSlots>().convert(IvSlider);
export const Spin = ofType<OmitVue<IvSpin>, {}, AnyScopedSlots>().convert(IvSpin);
export const Steps = ofType<OmitVue<IvSteps>, {}, AnyScopedSlots>().convert(IvSteps);
export const StepsStep = ofType<OmitVue<IvStepsStep>, {}, AnyScopedSlots>().convert(IvStepsStep);
export const Switch = ofType<OmitVue<IvSwitch>, {}, AnyScopedSlots>().convert(IvSwitch);
export const Table = ofType<OmitVue<IvTable>, {}, AnyScopedSlots>().convert(IvTable);
// export const TableColumn = ofType<OmitVue<IvTableColumn>, {}, AnyScopedSlots>().convert(IvTableColumn);
// export const TableRenderCreateElementData = ofType<OmitVue<IvTableRenderCreateElementData>, {}, AnyScopedSlots>().convert(IvTableRenderCreateElementData);
// export const TableColumnRenderParams = ofType<OmitVue<IvTableColumnRenderParams>, {}, AnyScopedSlots>().convert(IvTableColumnRenderParams);
// export const TableColumnRenderHeadParams = ofType<OmitVue<IvTableColumnRenderHeadParams>, {}, AnyScopedSlots>().convert(IvTableColumnRenderHeadParams);
// export const TableExportCsvParams = ofType<OmitVue<IvTableExportCsvParams>, {}, AnyScopedSlots>().convert(IvTableExportCsvParams);
export const Tabs = ofType<OmitVue<IvTabs>, {}, AnyScopedSlots>().convert(IvTabs);
export const TabPane = ofType<OmitVue<IvTabPane>, {}, AnyScopedSlots>().convert(IvTabPane);
export const Tag = ofType<OmitVue<IvTag>, {}, AnyScopedSlots>().convert(IvTag);
export const Time = ofType<OmitVue<IvTime>, {}, AnyScopedSlots>().convert(IvTime);
export const Timeline = ofType<OmitVue<IvTimeline>, {}, AnyScopedSlots>().convert(IvTimeline);
export const TimelineItem = ofType<OmitVue<IvTimelineItem>, {}, AnyScopedSlots>().convert(IvTimelineItem);
export const TimePicker = ofType<OmitVue<IvTimePicker>, {}, AnyScopedSlots>().convert(IvTimePicker);
export const Tooltip = ofType<OmitVue<IvTooltip>, {}, AnyScopedSlots>().convert(IvTooltip);
export const Transfer = ofType<OmitVue<IvTransfer>, {}, AnyScopedSlots>().convert(IvTransfer);
export const Tree = ofType<OmitVue<IvTree>, {}, AnyScopedSlots>().convert(IvTree);
// export const TreeChild = ofType<OmitVue<IvTreeChild>, {}, AnyScopedSlots>().convert(IvTreeChild);
export const Upload = ofType<OmitVue<IvUpload>, {}, AnyScopedSlots>().convert(IvUpload);