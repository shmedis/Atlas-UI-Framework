import { ImageStyle, TextProps, TextStyle, ViewStyle } from "react-native";

declare type ActivityIndicatorSizeType = "small" | "large";

interface InputLabelType extends TextStyle {
    numberOfLines?: number
}

interface InputType extends TextStyle {
    autoCapitalize?: string,
    selectionColor?: string,
    placeholderTextColor?: string,
    underlineColorAndroid?: string,
}

// Activity Indicator
export interface ActivityIndicatorType {
    container?: ViewStyle,
    indicator?: {
        color?: string
        size?: ActivityIndicatorSizeType
    }
}

// Animation
export interface AnimationType {
    container?: ViewStyle
}

// Background Image
export interface BackgroundImageType {
    container?: ViewStyle,
    image?: ImageStyle & {
        svgColor?: string
    }
}

// Badge
export interface BadgeType {
    container?: ViewStyle,
    caption?: TextStyle
}

// Bottom Sheet
export interface BottomSheetType {
    container?: ViewStyle,
    containerWhenExpandedFullscreen?: ViewStyle,
    modal?: ViewStyle,
    modalItems?: {
        defaultStyle?: TextStyle;
        primaryStyle?: TextStyle;
        dangerStyle?: TextStyle;
        customStyle?: TextStyle;
    }
}

// Action Button
interface ButtonContainerType extends ViewStyle {
    rippleColor?: string
}

interface ButtonStyleType extends ViewStyle {
    size?: number
}

interface ButtonIconType extends ButtonStyleType {
    color?: string
}

export interface ActionButtonType {
    container?: ButtonContainerType,
    icon?: ButtonIconType,
    caption?: TextStyle
}

// Carousel
export interface CarouselLayoutType {
    slideItem?: ViewStyle,
    inactiveSlideItem?: {
        opacity?: number,
        scale?: number
    },
    pagination?: {
        container?: ViewStyle,
        text?: TextStyle,
        dotContainerStyle?: ViewStyle,
        dotStyle?: ViewStyle & {
            color?: string
        },
        inactiveDotStyle?: {
            color?: string,
            scale?: number,
            opacity?: number
        }
    }
}

export interface CarouselType {
    container?: ViewStyle,
    fullWidthLayout?: CarouselLayoutType,
    cardLayout?: CarouselLayoutType,
    activityIndicator?: {
        color?: string
    }
}

// Checkbox
interface CheckBoxInputType extends TextStyle {
    thumbColorOn?: string,
    thumbColorOff?: string,
    trackColorOn?: string,
    trackColorOff?: string,
}

export interface CheckBoxType {
    container?: ViewStyle,
    label?: InputLabelType,
    input?: CheckBoxInputType,
    inputDisabled?: CheckBoxInputType,
    inputError?: CheckBoxInputType,
    validationMessage?: TextStyle
}

// Color Picker
export interface ColorPickerType {
    container?: ViewStyle,
    thumbnail?: ViewStyle
}

// Container
export interface ContainerType {
    container?: ViewStyle
}

// Date Picker
export interface DatePickerType {
    container?: ViewStyle,
    label?: InputLabelType,
    pickerIOS?: ViewStyle,
    pickerBackdropIOS?: ViewStyle,
    pickerTopIOS?: ViewStyle,
    value?: TextStyle,
    valueDisabled?: TextStyle,
    placeholder?: TextStyle,
    placeholderDisabled?: TextStyle,
    validationMessage?: TextStyle
}

// Drop Down
export interface DropDownType {
    container?: ViewStyle,
    label?: InputLabelType,
    value?: {
        placeholderTextColor?: string
    } & TextStyle,
    valueDisabled?: TextStyle,
    validationMessage?: TextStyle,
    /*  New dropdown styles start */
    valueContainer?: {
        rippleColor?: string
    } & ViewStyle;
    menuWrapper?: ViewStyle
    item?: TextStyle;
    itemContainer?: ViewStyle;
    selectedItem?: TextStyle;
    selectedItemContainer?: ViewStyle;
    /*  New dropdown styles end */
    useUniformDesign?: boolean; // Flag for using old dropdown design with PickerWheel in IOS
    // Old dropdown styles start
    pickerIOS?: ViewStyle,
    pickerItemIOS?: ViewStyle,
    pickerBackdropIOS?: ViewStyle,
    pickerTopIOS?: ViewStyle,
    // Old dropdown styles end
}

// Feedback
export interface FeedbackType {
    floatingButton?: ViewStyle,
    dialog?: ViewStyle,
    title?: TextStyle,
    textAreaInput?: InputType,
    switchLabel?: TextStyle,
    switchInput?: CheckBoxInputType,
    button?: {
        color?: string,
        borderColor?: string,
        borderWidth?: number
    },
    activityIndicator?: {
        color?: string
    }
}


// Floating Action Button
export interface FloatingActionButtonType {
    container?: ViewStyle,
    button?: ButtonStyleType & {
        rippleColor?: string
    },
    buttonIcon?: ButtonIconType
    secondaryButton?: ButtonStyleType
    secondaryButtonIcon?: ButtonIconType
    secondaryButtonCaption?: TextStyle,
    secondaryButtonCaptionContainer?: ViewStyle,
}

// Images
export interface ImageType {
    container?: ButtonContainerType,
    image?: ImageStyle
}

// Intro Screen
export interface IntroScreenButtonType {
    container?: ButtonContainerType,
    icon?: ButtonIconType,
    caption?: TextStyle
}

interface IntroScreenPaginationType {
    buttonSkip?: IntroScreenButtonType,
    buttonPrevious?: IntroScreenButtonType,
    buttonNext?: IntroScreenButtonType,
    buttonDone?: IntroScreenButtonType,
}

export interface IntroScreenType {
    fullscreenContainer?: ViewStyle,
    popupContainer?: ViewStyle,
    paginationContainer?: ViewStyle,
    paginationText?: TextStyle,
    dotStyle?: ViewStyle,
    activeDotStyle?: ViewStyle,

    paginationAbove?: IntroScreenPaginationType & {
        buttonsContainer?: ViewStyle,
    },
    paginationBetween?: IntroScreenPaginationType
}

// Layout
export interface LayoutType {
    sidebar: ViewStyle,
    statusBar: {
        // Only backgroundColor and barStyle are allowed
        backgroundColor: string
        barStyle: string,
    },
    header: {
        container: ViewStyle,
        title: TextStyle,
        backButtonText: TextStyle,
        backButtonIcon: ImageStyle,
    },
    container: ViewStyle,
}

// Layout grid
export interface LayoutGridType {
    container?: ViewStyle
}

// List view
export interface ListViewType {
    container?: ViewStyle,
    listItem?: ViewStyle
}

// List View Swipe
interface ListViewSwipeActionType extends ViewStyle {
    panelSize?: number
}

export interface ListViewSwipeType {
    container?: ViewStyle,
    leftAction?: ListViewSwipeActionType,
    rightAction?: ListViewSwipeActionType,
}

// Maps
export interface MapsType {
    container?: ViewStyle,
    loadingOverlay?: ViewStyle,
    loadingIndicator?: {
        color?: string
    },
    marker?: {
        color?: string,
        opacity?: number
    }
}

// Navigation
export interface NavigationType {
    bottomBar?: {
        container?: ViewStyle,
        label?: TextStyle,
        selectedLabel?: TextStyle,
        icon?: TextStyle,
        selectedIcon?: TextStyle,
    },
    progressOverlay?: {
        background?: ViewStyle,
        container?: ViewStyle,
        activityIndicator?: ViewStyle & {
            color?: string,
            size?: ActivityIndicatorSizeType
        }
        text?: TextStyle
    },
}

// Page Title
export interface PageTitleType {
    container?: ViewStyle,
    text?: TextStyle
}

// Progress Bar
export interface ProgressBarType {
    container?: ViewStyle,
    bar?: ViewStyle,
    fill?: {
        backgroundColor?: string
    },
    validationMessage?: TextStyle
}

// Progress Circle
export interface ProgressCircleType {
    container?: ViewStyle,
    circle?: {
        size?: number,
        borderWidth?: number,
        borderColor?: string
    },
    fill?: {
        width?: number,
        backgroundColor?: string,
        lineCapRounded?: boolean,
    },
    text?: TextStyle
    validationMessage?: TextStyle
}

// Popup Menu
export interface PopupMenuType {
    container?: ViewStyle;
    basic: BasicItemStyle;
    buttonContainer?: ViewStyle;
}

interface BasicItemStyle {
    itemStyle?: ItemStyle;
    containerStyle?: ViewStyle;
    dividerColor?: string;
}

interface ItemStyle {
    ellipsizeMode?: TextProps["ellipsizeMode"];
    defaultStyle?: TextStyle;
    primaryStyle?: TextStyle;
    dangerStyle?: TextStyle;
    customStyle?: TextStyle;
}


// QR Code
export interface QRCodeType {
    container?: ViewStyle,
    qrcode?: {
        size?: number,
        color?: string,
        backgroundColor?: string
    }
}

// Rating
export interface RatingType {
    container?: ViewStyle,
    containerDisabled?: ViewStyle,
    icon?: ViewStyle & {
        size?: number,
        color?: string,
        selectedColor?: string,
    }
}

// Safe Area View
export interface SafeAreaViewType {
    container?: ViewStyle
}

// Slider
export interface SliderType {
    container?: ViewStyle,
    track?: ViewStyle,
    trackDisabled?: ViewStyle,
    highlight?: ViewStyle,
    highlightDisabled?: ViewStyle,
    marker?: ViewStyle,
    markerActive?: ViewStyle,
    markerDisabled?: ViewStyle,
    validationMessage?: TextStyle,

}

// Tab Container
export interface TabContainerType {
    container?: ViewStyle,
    tabBar?: ViewStyle & {
        bounces?: boolean,
        pressColor?: string,
        pressOpacity?: number,
        scrollEnabled?: boolean
    },
    indicator?: ViewStyle,
    tab?: ViewStyle,
    label?: TextStyle,
    activeLabel?: TextStyle
}

// Text Box
export interface TextBoxType {
    container?: ViewStyle,
    label?: InputLabelType,
    input?: InputType,
    inputDisabled?: InputType,
    inputError?: InputType,
    validationMessage?: TextStyle
}

// Toggle Buttons
export interface ToggleButtonsType {
    container?: ViewStyle,
    containerDisabled?: ViewStyle,
    button?: ViewStyle,
    text?: TextStyle,
    activeButton?: ViewStyle,
    activeButtonText?: TextStyle,
    validationMessage?: TextStyle,
}

// Text
export interface TextType {
    container?: ViewStyle,
    text?: TextStyle
}

// Video Player
export interface VideoPlayerType {
    container?: ViewStyle,
    indicator?: {
        backgroundColor?: string,
    },
    video?: ViewStyle
}

// Web View
export interface WebViewType {
    container?: ViewStyle,
    errorContainer?: ViewStyle,
    errorText?: TextStyle
}
