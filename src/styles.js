import { StyleSheet, Dimensions, Platform } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  
  // Minimalist Top Navbar
  navbar: { 
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', 
    paddingHorizontal: 25, paddingVertical: 10, 
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 45 : 10,
    zIndex: 100
  },
  navBrand: { flexDirection: 'row', alignItems: 'center' },
  brandLogo: { width: 35, height: 35, borderRadius: 10 },
  brandName: { fontWeight: '900', fontSize: 18, color: '#111827', marginLeft: 10, letterSpacing: -0.5 },
  
  notificationBtn: { width: 40, height: 40, borderRadius: 12, backgroundColor: '#f8fafc', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#f1f5f9' },
  notificationDot: { position: 'absolute', top: 10, right: 10, width: 8, height: 8, borderRadius: 4, backgroundColor: '#ef4444', borderWidth: 2, borderColor: '#fff' },

  searchContainer: { marginBottom: 20 },
  userAvatar: { width: 35, height: 35, borderRadius: 12, borderWidth: 1, borderColor: '#f1f5f9' },

  searchBar: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f8fafc', paddingHorizontal: 20, paddingVertical: 12, borderRadius: 20, borderWidth: 1, borderColor: '#f1f5f9' },
  searchText: { marginLeft: 10, color: '#94a3b8', fontSize: 14, fontWeight: '500' },

  stepTrack: { flexDirection: 'row', gap: 6 },
  stepIndicator: { width: 22, height: 4, borderRadius: 2, backgroundColor: '#f1f5f9' },
  stepIndicatorActive: { backgroundColor: '#ef4444' },

  mainScroll: { flex: 1 },
  scrollContent: { padding: 25, paddingBottom: 180 }, // Extra padding for floating nav
  
  heroTitle: { fontSize: 36, fontWeight: '900', color: '#111827', letterSpacing: -1.5, marginBottom: 15, lineHeight: 40 },
  
  // Enhanced Home Styles
  bannerBox: { width: '100%', height: 180, borderRadius: 25, overflow: 'hidden', marginBottom: 25, backgroundColor: '#f1f5f9' },
  bannerImg: { width: '100%', height: '100%' },
  
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  sectionTitle: { fontSize: 18, fontWeight: '900', color: '#111827' },
  viewAll: { fontSize: 12, fontWeight: '900', color: '#ef4444' },

  statusRow: { flexDirection: 'row', gap: 10, marginBottom: 25 },
  statusCard: { flex: 1, padding: 15, borderRadius: 20, backgroundColor: '#fff', borderWidth: 1, borderColor: '#f1f5f9', shadowColor: '#000', shadowOpacity: 0.03, shadowRadius: 10, elevation: 2 },
  statusLabel: { fontSize: 9, fontWeight: '900', color: '#94a3b8', textTransform: 'uppercase', marginBottom: 4, letterSpacing: 0.5 },
  statusVal: { fontSize: 16, fontWeight: '900', color: '#111827' },

  circleCatScroll: { marginBottom: 30 },
  circleCatItem: { alignItems: 'center', marginRight: 20 },
  circleBox: { width: 64, height: 64, borderRadius: 22, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', marginBottom: 8, borderWidth: 1, borderColor: '#f1f5f9', shadowColor: '#000', shadowOpacity: 0.04, shadowRadius: 8, elevation: 2 },
  circleEmoji: { fontSize: 28 },
  circleLabel: { fontSize: 11, fontWeight: '700', color: '#111827' },

  promoScroll: { marginBottom: 20 },
  promoCard: { width: 280, height: 150, borderRadius: 25, marginRight: 15, overflow: 'hidden', backgroundColor: '#f1f5f9' },
  promoImg: { width: '100%', height: '100%' },

  // Premium Bottom Nav (Top-most style from image)
  bottomNavWrapper: { position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 1000 },
  floatingNav: { 
    flexDirection: 'row', backgroundColor: '#fff', 
    height: Platform.OS === 'ios' ? 95 : 75,
    paddingBottom: Platform.OS === 'ios' ? 25 : 10,
    justifyContent: 'space-around', alignItems: 'center',
    borderTopWidth: 1, borderTopColor: '#f8fafc',
    shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 20, elevation: 15,
    overflow: 'visible'
  },
  navItem: { alignItems: 'center', justifyContent: 'center', width: 70, height: '100%' },
  navItemActive: { 
    // This will be used for the container but we need a separate style for the protruding circle
  },
  activeCircle: {
    position: 'absolute',
    top: -25, // Protrude from top
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#ef4444',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
    borderWidth: 4,
    borderColor: '#fff'
  },
  navIcon: { fontSize: 24, opacity: 0.3, color: '#111827' },
  navIconActive: { opacity: 1, color: '#ef4444' },
  navLabel: { fontSize: 10, fontWeight: '900', color: '#94a3b8', marginTop: 4, textTransform: 'uppercase' },
  navLabelActive: { color: '#ef4444' },

  backBtn: { alignSelf: 'flex-start', paddingVertical: 8, paddingHorizontal: 15, borderRadius: 12, backgroundColor: '#f8fafc', marginBottom: 15, borderWidth: 1, borderColor: '#f1f5f9' },
  backBtnTxt: { fontSize: 12, fontWeight: '900', color: '#64748b' },

  // Floating Order Bar
  orderBarWrapper: { position: 'absolute', bottom: 90, left: 25, right: 25, zIndex: 999 },
  orderBar: { 
    backgroundColor: '#fff', borderRadius: 35, padding: 15, paddingLeft: 25,
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    borderWidth: 1, borderColor: '#f1f5f9',
    shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 20, elevation: 10
  },
  orderInfo: { flex: 1 },
  orderTotal: { fontSize: 20, fontWeight: '900', color: '#111827' },
  orderBtn: { backgroundColor: '#ef4444', paddingVertical: 15, paddingHorizontal: 25, borderRadius: 25 },
  orderBtnTxt: { color: '#fff', fontWeight: '900', fontSize: 14 },

  // Menu & Selection
  catScroll: { marginBottom: 25 },
  catBtn: { paddingHorizontal: 22, paddingVertical: 12, borderRadius: 20, backgroundColor: '#fff', marginRight: 10, borderWidth: 1, borderColor: '#f1f5f9' },
  catBtnActive: { backgroundColor: '#ef4444', borderColor: '#ef4444' },
  catTxt: { fontWeight: '900', fontSize: 13, color: '#64748b' },
  catTxtActive: { color: '#fff' },
  
  menuGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  menuCard: { width: (SCREEN_WIDTH - 65) / 2, backgroundColor: '#fff', borderRadius: 30, padding: 12, marginBottom: 20, borderWidth: 1, borderColor: '#f1f5f9', shadowColor: '#000', shadowOpacity: 0.04, shadowRadius: 15, elevation: 3 },
  menuCardSelected: { borderColor: '#ef4444', borderWidth: 2, backgroundColor: '#fff' },
  itemImgBox: { height: 120, backgroundColor: '#f8fafc', borderRadius: 22, justifyContent: 'center', alignItems: 'center', marginBottom: 12 },
  itemEmoji: { fontSize: 50 },
  itemName: { fontWeight: '900', fontSize: 15, color: '#111827', marginBottom: 4 },
  itemPrice: { fontWeight: '900', color: '#ef4444', fontSize: 16, marginBottom: 12 },
  
  addBtn: { backgroundColor: '#111827', paddingVertical: 12, borderRadius: 18, alignItems: 'center' },
  addBtnTxt: { fontSize: 10, fontWeight: '900', color: '#fff' },
  counter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  countBtn: { width: 34, height: 34, borderRadius: 12, backgroundColor: '#f1f5f9', justifyContent: 'center', alignItems: 'center' },
  countBtnActive: { backgroundColor: '#ef4444' },
  countBtnTxt: { fontWeight: '900', fontSize: 16, color: '#111827' },
  countVal: { fontWeight: '900', fontSize: 14 },

  // Table
  floorSelector: { flexDirection: 'row', gap: 10, marginBottom: 20 },
  floorBtn: { flex: 1, paddingVertical: 14, borderRadius: 20, backgroundColor: '#f8fafc', alignItems: 'center', borderWidth: 1, borderColor: '#f1f5f9' },
  floorBtnActive: { backgroundColor: '#111827', borderColor: '#111827' },
  floorTxt: { fontSize: 13, fontWeight: '900', color: '#64748b' },
  floorTxtActive: { color: '#fff' },

  tableList: { gap: 15 },
  tableItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 25, backgroundColor: '#f8fafc', borderRadius: 30, borderWidth: 1, borderColor: '#f1f5f9' },
  tableSelected: { backgroundColor: '#ef4444', borderColor: '#ef4444' },
  tableOccupied: { opacity: 0.4 },
  tableName: { fontWeight: '900', fontSize: 20, color: '#111827' },
  tableCap: { fontSize: 13, color: '#94a3b8' },
  tableStatus: { fontWeight: '900', fontSize: 12 },

  // Payment Selection
  paymentSection: { marginBottom: 25 },
  paymentCategoryTitle: { fontSize: 14, fontWeight: '900', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 15 },
  payOptionCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 20, borderRadius: 25, marginBottom: 12, borderWidth: 1, borderColor: '#f1f5f9', shadowColor: '#000', shadowOpacity: 0.02, shadowRadius: 10, elevation: 2 },
  payOptionActive: { borderColor: '#ef4444', borderWidth: 2, backgroundColor: '#fef2f2' },
  payOptionIconBox: { width: 45, height: 45, borderRadius: 15, backgroundColor: '#f8fafc', justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  payOptionInfo: { flex: 1 },
  payOptionName: { fontSize: 16, fontWeight: '900', color: '#111827' },
  payOptionSub: { fontSize: 12, color: '#94a3b8' },
  
  bankSelector: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginTop: 10, paddingLeft: 60 },
  bankBadge: { paddingHorizontal: 15, paddingVertical: 8, borderRadius: 12, backgroundColor: '#f8fafc', borderWidth: 1, borderColor: '#f1f5f9' },
  bankBadgeActive: { backgroundColor: '#ef4444', borderColor: '#ef4444' },
  bankBadgeTxt: { fontSize: 12, fontWeight: '900', color: '#64748b' },
  bankBadgeTxtActive: { color: '#fff' },

  // Payment Final
  paymentDetail: { alignItems: 'center', paddingTop: 10, paddingHorizontal: 5 },
  timerTitle: { fontSize: 13, fontWeight: '900', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: 1 },
  timerVal: { fontSize: 64, fontWeight: '900', color: '#111827', letterSpacing: -2, marginBottom: 25 },
  
  detailCard: { width: '100%', backgroundColor: '#fff', padding: 30, borderRadius: 40, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 20, elevation: 10 },
  
  qrisFrame: { width: '100%', aspectRatio: 1, backgroundColor: '#fff', borderRadius: 25, padding: 10, justifyContent: 'center', alignItems: 'center', marginBottom: 20, borderWidth: 1, borderColor: '#f1f5f9' },
  qrisImg: { width: '100%', height: '100%' },
  qrInstruction: { fontSize: 13, color: '#94a3b8', fontWeight: '600', textAlign: 'center', marginBottom: 20 },

  totalLabel: { fontSize: 13, color: '#94a3b8', fontWeight: '900', textTransform: 'uppercase', marginBottom: 5 },
  totalVal: { fontSize: 32, fontWeight: '900', color: '#ef4444' },

  confirmBtn: { width: '100%', backgroundColor: '#ef4444', paddingVertical: 22, borderRadius: 28, alignItems: 'center', marginTop: 35 },
  confirmBtnTxt: { color: '#fff', fontWeight: '900', fontSize: 14, letterSpacing: 1 },

  successScreen: { alignItems: 'center', paddingTop: 20 },
  checkCircle: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#f0fdf4', justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  successTitle: { fontSize: 28, fontWeight: '900', color: '#111827', marginBottom: 5 },
  successSub: { fontSize: 14, color: '#94a3b8', textAlign: 'center', marginBottom: 30 },

  receiptCard: { width: '100%', backgroundColor: '#fff', borderRadius: 30, padding: 25, borderWidth: 1, borderColor: '#f1f5f9', shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 15, elevation: 5 },
  receiptHeader: { alignItems: 'center', marginBottom: 20 },
  receiptLogo: { fontSize: 18, fontWeight: '900', color: '#111827', letterSpacing: 2 },
  receiptDivider: { height: 1, backgroundColor: '#f1f5f9', marginVertical: 15 },
  receiptItem: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  receiptItemName: { fontSize: 14, color: '#64748b', fontWeight: '500' },
  receiptItemPrice: { fontSize: 14, color: '#111827', fontWeight: '700' },
  receiptTotalRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  receiptTotalLabel: { fontSize: 16, fontWeight: '900', color: '#111827' },
  // Custom Alert
  alertOverlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'center', alignItems: 'center', zIndex: 10000, padding: 25 },
  alertBox: { width: '100%', backgroundColor: '#fff', borderRadius: 40, padding: 35, alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 30, elevation: 20 },
  alertIcon: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#fef2f2', justifyContent: 'center', alignItems: 'center', marginBottom: 25 },
  alertTitle: { fontSize: 22, fontWeight: '900', color: '#111827', marginBottom: 12 },
  alertMsg: { fontSize: 15, color: '#64748b', textAlign: 'center', lineHeight: 22, marginBottom: 30 },
  alertBtn: { width: '100%', backgroundColor: '#111827', paddingVertical: 20, borderRadius: 25, alignItems: 'center' },
  alertBtnTxt: { color: '#fff', fontWeight: '900', fontSize: 14, letterSpacing: 1.5 },

  // Barcode & Table Badge
  barcodeContainer: { width: '100%', height: 220, backgroundColor: '#fff', padding: 25, borderRadius: 30, alignItems: 'center', justifyContent: 'center', marginBottom: 30, borderWidth: 1, borderColor: '#f1f5f9', shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 20, elevation: 8 },
  barcodeImg: { width: '100%', height: '100%' },
  tableBadge: { backgroundColor: '#ef4444', paddingHorizontal: 25, paddingVertical: 12, borderRadius: 20, marginBottom: 20 },
  tableBadgeTxt: { fontSize: 18, fontWeight: '900', color: '#fff', letterSpacing: 1 },

  // Bank Selection
  bankGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginTop: 15, marginBottom: 10 },
  bankCard: { width: '48%', backgroundColor: '#f8fafc', padding: 15, borderRadius: 20, borderWidth: 1, borderColor: '#f1f5f9', alignItems: 'center' },
  bankCardActive: { borderColor: '#ef4444', backgroundColor: '#fff', shadowColor: '#ef4444', shadowOpacity: 0.1, shadowRadius: 10, elevation: 5 },
  bankName: { fontSize: 13, fontWeight: '900', color: '#64748b' },
  bankNameActive: { color: '#ef4444' },

  // Zoom Barcode
  zoomOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.9)', justifyContent: 'center', alignItems: 'center', padding: 20 },
  zoomBox: { width: '100%', backgroundColor: '#fff', padding: 40, borderRadius: 30, alignItems: 'center' },
  zoomedBarcode: { width: '100%', height: 250 },
  closeZoom: { marginTop: 30, backgroundColor: '#ef4444', paddingHorizontal: 30, paddingVertical: 15, borderRadius: 20 },
  closeZoomTxt: { color: '#fff', fontWeight: '900', fontSize: 14 },

  // Receipt Enhancements
  // Login Screen
  loginContainer: { flex: 1, backgroundColor: '#fff', padding: 30, justifyContent: 'center' },
  loginHeader: { alignItems: 'center', marginBottom: 50 },
  loginLogo: { width: 100, height: 100, marginBottom: 20, borderRadius: 25 },
  loginTitle: { fontSize: 32, fontWeight: '900', color: '#111827', letterSpacing: -1 },
  loginSub: { fontSize: 16, color: '#64748b', marginTop: 5 },
  inputGroup: { marginBottom: 20 },
  inputLabel: { fontSize: 12, fontWeight: '900', color: '#94a3b8', textTransform: 'uppercase', marginBottom: 8, marginLeft: 5 },
  inputField: { backgroundColor: '#f8fafc', paddingHorizontal: 20, paddingVertical: 18, borderRadius: 20, borderWidth: 1, borderColor: '#f1f5f9', fontSize: 16, color: '#111827', fontWeight: '600' },
  loginBtn: { backgroundColor: '#ef4444', paddingVertical: 20, borderRadius: 25, alignItems: 'center', marginTop: 20, shadowColor: '#ef4444', shadowOpacity: 0.3, shadowRadius: 15, elevation: 8 },
  loginBtnTxt: { color: '#fff', fontWeight: '900', fontSize: 16, letterSpacing: 1 },
  googleBtn: { flexDirection: 'row', backgroundColor: '#fff', paddingVertical: 18, borderRadius: 25, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#f1f5f9', shadowColor: '#000', shadowOpacity: 0.02, shadowRadius: 10, elevation: 1 },
  googleBtnTxt: { color: '#111827', fontWeight: '800', fontSize: 15 },

  // Profile Dropdown
  profileDropdown: { position: 'absolute', top: 75, right: 25, width: 160, backgroundColor: '#fff', borderRadius: 18, padding: 6, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 15, elevation: 10, borderWidth: 1, borderColor: '#f1f5f9', zIndex: 1000 },
  dropdownItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 12, borderRadius: 12 },
  dropdownItemTxt: { fontSize: 13, fontWeight: '700', color: '#111827', marginLeft: 8 },
  dropdownDivider: { height: 1, backgroundColor: '#f1f5f9', marginHorizontal: 6 },
});
