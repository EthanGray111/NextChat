import styles from "./auth.module.scss";
import { IconButton } from "./button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Path, SAAS_CHAT_URL } from "../constant";
import { useAccessStore } from "../store";
import Locale from "../locales";

import BotIcon from "../icons/bot.svg";
import { getClientConfig } from "../config/client";
import { PasswordInput } from "./ui-lib";
import LeftIcon from "@/app/icons/left.svg";

export function AuthPage() {
  const navigate = useNavigate();
  const accessStore = useAccessStore();
  const goHome = () => navigate(Path.Home);
  const goChat = () => navigate(Path.Chat);

  const resetAccessCode = () => {
    accessStore.update((access) => {
      access.openaiApiKey = "";
      access.accessCode = "";
    });
  };

  useEffect(() => {
    if (getClientConfig()?.isApp) {
      navigate(Path.Settings);
    }
    // 【修复】：删除了自动跳转逻辑
    // 这样当用户点击“输入密钥”时，会停留在这里，给用户机会修改过期的 Key
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles["auth-page"]}>
      <div className={styles["auth-header"]}>
        <IconButton
          icon={<LeftIcon />}
          text={Locale.Auth.Return}
          onClick={() => navigate(Path.Home)}
        ></IconButton>
      </div>
      <div className={styles["auth-logo"]}>
        <BotIcon />
      </div>

      <div className={styles["auth-title"]}>需要更新密钥</div>
      <div className={styles["auth-tips"]}>您的密钥已过期或无效，请在下方输入新密钥</div>

      {/* 仅保留 OpenAI Key 输入框 */}
      <PasswordInput
        style={{ marginTop: "3vh", marginBottom: "3vh" }}
        aria={Locale.Settings.ShowPassword}
        aria-label="密钥"
        value={accessStore.openaiApiKey}
        type="text"
        placeholder="在此输入新密钥 (sk-...)"
        onChange={(e) => {
          accessStore.update(
            (access) => (access.openaiApiKey = e.currentTarget.value),
          );
        }}
      />

      <div className={styles["auth-actions"]}>
        <IconButton
          text="确认更新并登录"
          type="primary"
          onClick={goChat}
        />
      </div>
    </div>
  );
}