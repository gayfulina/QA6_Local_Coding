import { expect } from 'chai';
import LoginPage from './../../../pageObjects/login.page';

describe('LOGIN PAGE ELEMENTS', function () {
  before('', function () {
    LoginPage.open();
  });

  // it('TC-N Local Coding link displayed', function () {});

  it('TC-N Welcome Back header is displayed', function () {
    expect(LoginPage.headerLogin.isDisplayed()).to.be.true;
  });

  it('TC-N Header text = Welcome Back!', function () {
    expect(LoginPage.headerLogin.getText()).eq('Welcome back!');
  });

  it('TC-N Email field is displayed', function () {
    expect(LoginPage.inputUsername.isDisplayed()).to.be.true;
  });

  it('TC-N Email field placeholder = Email', function () {
    expect(LoginPage.inputUsername.getAttribute('placeholder')).eq('Email');
  });

  it('TC-N Email icon is displayed', function () {
    expect(LoginPage.mailIcon.isDisplayed()).to.be.true;
  });

  it('TC-N Password field is displayed', function () {
    expect(LoginPage.inputPassword.isDisplayed()).to.be.true;
  });

  it('TC-N Password field placeholder = Password', function () {
    expect(LoginPage.inputPassword.getAttribute('placeholder')).eq('Password');
  });

  it('TC-N Password icon is displayed', function () {
    expect(LoginPage.lockIcon.isDisplayed()).to.be.true;
  });

  it('TC-N Log in button is displayed', function () {
    expect(LoginPage.loginBtn.isDisplayed()).to.be.true;
  });

  it('TC-N Log in button is disabled by default', function () {
    expect(LoginPage.loginBtn.isEnabled()).to.be.false;
  });

  it('TC-N Log in button text = Log in', function () {
    expect(LoginPage.loginBtn.getText()).eq('Log in');
  });

  it('TC-N Don’t have an account? label is displayed', function () {
    expect($('//div[@class="ant-form-item-control-input-content"]/p[1]').isDisplayed()).to.be.true;
  });

  it('TC-N Don’t have an account? label text', function () {
    expect($('//div[@class="ant-form-item-control-input-content"]/p[1]').getText()).eq('Don’t have an account? Create one.');
  });

  it('TC-N Register link is displayed', function () {
    expect(LoginPage.registerLink.isDisplayed()).to.be.true;
  });

  it('TC-N Register link text = Create one', function () {
    expect(LoginPage.registerLink.getText()).eq('Create one');
  });

  it('TC-N Register link is clickable', function () {
    expect(LoginPage.registerLink.isClickable()).to.be.true;
  });
});
