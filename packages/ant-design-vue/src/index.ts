import {
    Affix as AAffix,
    Anchor as AAnchor,
    AutoComplete as AAutoComplete,
    Alert as AAlert,
    Avatar as AAvatar,
    BackTop as ABackTop,
    Badge as ABadge,
    Breadcrumb as ABreadcrumb,
    Button as AButton,
    Calendar as ACalendar,
    Card as ACard,
    Collapse as ACollapse,
    Carousel as ACarousel,
    Cascader as ACascader,
    Checkbox as ACheckbox,
    Col as ACol,
    DatePicker as ADatePicker,
    Divider as ADivider,
    Dropdown as ADropdown,
    Form as AForm,
    Icon as AIcon,
    Input as AInput,
    InputNumber as AInputNumber,
    Layout as ALayout,
    List as AList,
    LocaleProvider as ALocaleProvider,
    message as Amessage,
    Menu as AMenu,
    Modal as AModal,
    notification as Anotification,
    Pagination as APagination,
    Popconfirm as APopconfirm,
    Popover as APopover,
    Progress as AProgress,
    Radio as ARadio,
    Rate as ARate,
    Row as ARow,
    Select as ASelect,
    Slider as ASlider,
    Spin as ASpin,
    Steps as ASteps,
    Switch as ASwitch,
    Table as ATable,
    Transfer as ATransfer,
    Tree as ATree,
    TreeSelect as ATreeSelect,
    Tabs as ATabs,
    Tag as ATag,
    TimePicker as ATimePicker,
    Timeline as ATimeline,
    Tooltip as ATooltip,
    Upload as AUpload,
    Drawer as ADrawer,
    Skeleton as ASkeleton,
} from 'ant-design-vue';
import Vue from 'vue';
import { ofType } from 'vue-tsx-support';

type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
type OmitVue<T> = Partial<Omit<T, keyof Vue>>;
interface AnyScopedSlots {
    [key: string]: any;
}

export const message = Amessage;
export const notification = Anotification;

export const Affix = ofType<OmitVue<AAffix>, {}, AnyScopedSlots>().convert(AAffix);
export const Anchor = ofType<OmitVue<AAnchor>, {}, AnyScopedSlots>().convert(AAnchor);
export const AutoComplete = ofType<OmitVue<AAutoComplete>, {}, AnyScopedSlots>().convert(AAutoComplete);
export const Alert = ofType<OmitVue<AAlert>, {}, AnyScopedSlots>().convert(AAlert);
export const Avatar = ofType<OmitVue<AAvatar>, {}, AnyScopedSlots>().convert(AAvatar);
export const BackTop = ofType<OmitVue<ABackTop>, {}, AnyScopedSlots>().convert(ABackTop);
export const Badge = ofType<OmitVue<ABadge>, {}, AnyScopedSlots>().convert(ABadge);
export const Breadcrumb = ofType<OmitVue<ABreadcrumb>, {}, AnyScopedSlots>().convert(ABreadcrumb);
export const Button = ofType<OmitVue<AButton>, {}, AnyScopedSlots>().convert(AButton);
export const Calendar = ofType<OmitVue<ACalendar>, {}, AnyScopedSlots>().convert(ACalendar);
export const Card = ofType<OmitVue<ACard>, {}, AnyScopedSlots>().convert(ACard);
export const Collapse = ofType<OmitVue<ACollapse>, {}, AnyScopedSlots>().convert(ACollapse);
export const Carousel = ofType<OmitVue<ACarousel>, {}, AnyScopedSlots>().convert(ACarousel);
export const Cascader = ofType<OmitVue<ACascader>, {}, AnyScopedSlots>().convert(ACascader);
export const Checkbox = ofType<OmitVue<ACheckbox>, {}, AnyScopedSlots>().convert(ACheckbox);
export const Col = ofType<OmitVue<ACol>, {}, AnyScopedSlots>().convert(ACol);
export const DatePicker = ofType<OmitVue<ADatePicker>, {}, AnyScopedSlots>().convert(ADatePicker);
export const Divider = ofType<OmitVue<ADivider>, {}, AnyScopedSlots>().convert(ADivider);
export const Dropdown = ofType<OmitVue<ADropdown>, {}, AnyScopedSlots>().convert(ADropdown);
export const Form = ofType<OmitVue<AForm>, {}, AnyScopedSlots>().convert(AForm);
export const Icon = ofType<OmitVue<AIcon>, {}, AnyScopedSlots>().convert(AIcon);
export const Input = ofType<OmitVue<AInput>, {}, AnyScopedSlots>().convert(AInput);
export const InputNumber = ofType<OmitVue<AInputNumber>, {}, AnyScopedSlots>().convert(AInputNumber);
export const Layout = ofType<OmitVue<ALayout>, {}, AnyScopedSlots>().convert(ALayout);
export const List = ofType<OmitVue<AList>, {}, AnyScopedSlots>().convert(AList);
export const LocaleProvider = ofType<OmitVue<ALocaleProvider>, {}, AnyScopedSlots>().convert(ALocaleProvider);
export const Menu = ofType<OmitVue<AMenu>, {}, AnyScopedSlots>().convert(AMenu);
export const Modal = ofType<OmitVue<AModal>, {}, AnyScopedSlots>().convert(AModal);
export const Pagination = ofType<OmitVue<APagination>, {}, AnyScopedSlots>().convert(APagination);
export const Popconfirm = ofType<OmitVue<APopconfirm>, {}, AnyScopedSlots>().convert(APopconfirm);
export const Popover = ofType<OmitVue<APopover>, {}, AnyScopedSlots>().convert(APopover);
export const Progress = ofType<OmitVue<AProgress>, {}, AnyScopedSlots>().convert(AProgress);
export const Radio = ofType<OmitVue<ARadio>, {}, AnyScopedSlots>().convert(ARadio);
export const Rate = ofType<OmitVue<ARate>, {}, AnyScopedSlots>().convert(ARate);
export const Row = ofType<OmitVue<ARow>, {}, AnyScopedSlots>().convert(ARow);
export const Select = ofType<OmitVue<ASelect>, {}, AnyScopedSlots>().convert(ASelect);
export const Slider = ofType<OmitVue<ASlider>, {}, AnyScopedSlots>().convert(ASlider);
export const Spin = ofType<OmitVue<ASpin>, {}, AnyScopedSlots>().convert(ASpin);
export const Steps = ofType<OmitVue<ASteps>, {}, AnyScopedSlots>().convert(ASteps);
export const Switch = ofType<OmitVue<ASwitch>, {}, AnyScopedSlots>().convert(ASwitch);
export const Table = ofType<OmitVue<ATable>, {}, AnyScopedSlots>().convert(ATable);
export const Transfer = ofType<OmitVue<ATransfer>, {}, AnyScopedSlots>().convert(ATransfer);
export const Tree = ofType<OmitVue<ATree>, {}, AnyScopedSlots>().convert(ATree);
export const TreeSelect = ofType<OmitVue<ATreeSelect>, {}, AnyScopedSlots>().convert(ATreeSelect);
export const Tabs = ofType<OmitVue<ATabs>, {}, AnyScopedSlots>().convert(ATabs);
export const Tag = ofType<OmitVue<ATag>, {}, AnyScopedSlots>().convert(ATag);
export const TimePicker = ofType<OmitVue<ATimePicker>, {}, AnyScopedSlots>().convert(ATimePicker);
export const Timeline = ofType<OmitVue<ATimeline>, {}, AnyScopedSlots>().convert(ATimeline);
export const Tooltip = ofType<OmitVue<ATooltip>, {}, AnyScopedSlots>().convert(ATooltip);
export const Upload = ofType<OmitVue<AUpload>, {}, AnyScopedSlots>().convert(AUpload);
export const Drawer = ofType<OmitVue<ADrawer>, {}, AnyScopedSlots>().convert(ADrawer);
export const Skeleton = ofType<OmitVue<ASkeleton>, {}, AnyScopedSlots>().convert(ASkeleton);
