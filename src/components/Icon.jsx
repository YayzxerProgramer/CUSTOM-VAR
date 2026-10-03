import {
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    ChevronDown,
    ChevronUp,
    X,
    ExternalLink,
    Globe,
    CheckCircle,
    AlertCircle,
    Wind,
    Snowflake,
    ThermometerSnowflake,
    Fan,
    Leaf,
    Wrench,
    DraftingCompass,
    RefreshCw,
    Cpu,
    ClipboardCheck,
    Refrigerator,
    Building,
    Building2,
    Gavel,
    BookOpen,
    Syringe,
    Ship,
    HeartHandshake,
    Handshake,
    UserCheck,
    Receipt,
    Headphones,
    Users,
    GraduationCap,
    Camera,
    Phone,
    Mail,
    ClipboardList,
    Sparkles,
    Paperclip,
    MousePointerClick,
    ShieldCheck,
    FileText,
    Music,
    Trophy,
    PartyPopper,
    HelpCircle,
} from 'lucide-react';

const ICON_MAP = {
    // Arrows / Navigation
    arrow_forward: ArrowRight,
    arrow_right: ArrowRight,
    arrow_back_ios: ChevronLeft,
    arrow_forward_ios: ChevronRight,
    chevron_down: ChevronDown,
    chevron_up: ChevronUp,
    expand_more: ChevronDown,
    close: X,
    open_in_new: ExternalLink,
    public: Globe,
    check_circle: CheckCircle,
    error: AlertCircle,

    // Services / HVAC
    air: Wind,
    ac_unit: Snowflake,
    severe_cold: ThermometerSnowflake,
    mode_fan: Fan,
    energy_savings_leaf: Leaf,
    eco: Leaf,

    // Engineering / Maintenance
    engineering: Wrench,
    architecture: DraftingCompass,
    autorenew: RefreshCw,
    published_with_changes: RefreshCw,
    precision_manufacturing: Cpu,
    fact_check: ClipboardCheck,
    kitchen: Refrigerator,
    domain: Building,
    apartment: Building2,
    gavel: Gavel,
    local_library: BookOpen,
    vaccines: Syringe,
    directions_boat: Ship,
    volunteer_activism: HeartHandshake,
    handshake: Handshake,
    supervisor_account: UserCheck,
    build: Wrench,

    // Support / Admin
    receipt_long: Receipt,
    support_agent: Headphones,

    // Iniciativas & Talento
    diversity_3: Users,
    school: GraduationCap,
    photo_camera: Camera,
    call: Phone,
    mail: Mail,
    checklist: ClipboardList,
    stars: Sparkles,
    attach_file: Paperclip,
    touch_app: MousePointerClick,
    verified_user: ShieldCheck,
    edit_note: FileText,
    music_note: Music,
    sports_baseball: Trophy,
    celebration: PartyPopper,
};

export default function Icon({ name, className = '', size, color, style, strokeWidth = 2, ...props }) {
    if (!name) return null;

    const normalizedName = String(name).trim().toLowerCase();
    const Component = ICON_MAP[normalizedName] || HelpCircle;

    return (
        <Component
            className={`custom-icon ${className}`.trim()}
            size={size}
            color={color}
            style={style}
            strokeWidth={strokeWidth}
            aria-hidden="true"
            {...props}
        />
    );
}
