import BasePage from "./BasePage";
import {student} from "../Data/userData";

class SettingsPasswordUpdatePage extends BasePage {

  get placeholderOldPassword() { return $('[title="Old password"]')}
  get oldPassword() { return $('#oldPassword')}
  get newPassword() { return $('#newPassword')}
  get confirmPassword() { return $('#confirmPassword')}
  get updatePasswordBtn() { return $('.ant-btn.ant-btn-primary')}

  restoreOldPassword() {
    this.oldPassword.setValue(student.passwordNew);
    this.newPassword.setValue(student.password);
    this.confirmPassword.setValue(student.password);
    this.updatePasswordBtn.click();
  }
}

export default new SettingsPasswordUpdatePage();