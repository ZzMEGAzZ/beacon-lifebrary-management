export interface NavigationBar {
    page: 'dashboard' | 'overview' | 'event' | 'setup-event' | 'corporate' | 'manage-corporate' | 'beacon' | 'setting-beacon'
    isOpen: 'open' | 'close' | 'forceOpen'
}