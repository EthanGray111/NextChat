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
    // 自动登录检测：如果本地已经存了 Key，直接跳过登录页进入聊天
    if (accessStore.openaiApiKey) {
      goChat();
    }
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

      <div className={styles["auth-title"]}>需要登录</div>
      <div className={styles["auth-tips"]}>请填入密钥</div>

      {/* 仅保留 OpenAI Key 输入框，作为通用的密钥输入口 */}
      <PasswordInput
        style={{ marginTop: "3vh", marginBottom: "3vh" }}
        aria={Locale.Settings.ShowPassword}
        aria-label="密钥"
        value={accessStore.openaiApiKey}
        type="text"
        placeholder="在此输入密钥 (sk-...)"
        onChange={(e) => {
          accessStore.update(
            (access) => (access.openaiApiKey = e.currentTarget.value),
          );
        }}
      />

      <div className={styles["auth-actions"]}>
        <IconButton
          text="确认登录"
          type="primary"
          onClick={goChat}
        />
      </div>
    </div>
  );
}