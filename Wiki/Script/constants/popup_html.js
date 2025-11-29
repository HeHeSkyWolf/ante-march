/**
 * HTML snippet of the warning popup box for jumping to old websites.
 */
const POPUP_ALERT = `
  <div id="popup">
    <div id="popup-top"><h3>SiriusWiki</h3></div>
    <div id="popup-content"><p>即将离开SiriusWiki，请注意您的安全。非HTTPS链接可能存在风险，请谨慎访问。</p><p>如继续跳转，请点击下方链接；如需取消，请点击“取消”</p></div>
    <div id="popup-but"><button id="popup-cancel" style="margin-left: auto;">取消</button></div>
  </div>
`;

export { POPUP_ALERT }