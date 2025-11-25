export const OWNER = "Ethan";
export const REPO = "Gemini-Platform";
export const REPO_URL = `https://github.com/${OWNER}/${REPO}`;
export const ISSUE_URL = `https://github.com/${OWNER}/${REPO}/issues`;
export const UPDATE_URL = `${REPO_URL}#keep-updated`;
export const RELEASE_URL = `${REPO_URL}/releases`;
export const FETCH_COMMIT_URL = `https://api.github.com/repos/${OWNER}/${REPO}/commits?per_page=1`;
export const FETCH_TAG_URL = `https://api.github.com/repos/${OWNER}/${REPO}/tags?per_page=1`;
export const RUNTIME_CONFIG_DOM = "meta[name='config']";

export const DOCKER_WORK_DIR = "/app";
export const DOCKER_HTML_PATH = "/app/out/index.html";

export const IP_OPENAI_URL = "https://api.openai.com";

// 🔴 核心修改：把名字改成你的品牌
export const AppName = "Gemini 3.0";
export const AppDescription = "基于 Google 最强 Gemini 模型构建的全能 AI 助手";

export const Path = {
  Home: "/",
  Chat: "/chat",
  Settings: "/settings",
  NewChat: "/new-chat",
  Masks: "/masks",
  Market: "/market",
  Auth: "/auth",
};

export const ApiPath = {
  Cors: "",
  OpenAI: "/api/openai",
};

export const SlotID = {
  AppBody: "app-body",
  CustomModel: "custom-model",
};

export const FileName = {
  Masks: "masks.json",
  Prompts: "prompts.json",
};

export const StoreKey = {
  Chat: "chat-next-web-store",
  Access: "access-control",
  Config: "app-config",
  Mask: "mask-store",
  Prompt: "prompt-store",
  Update: "chat-update",
  Sync: "sync",
};

export const MAX_SIDEBAR_WIDTH = 500;
export const MIN_SIDEBAR_WIDTH = 230;
export const NARROW_SIDEBAR_WIDTH = 100;

export const ACCESS_CODE_PREFIX = "nk-";

export const LAST_INPUT_KEY = "last-input";
export const UNFINISHED_INPUT = (id: string) => "unfinished-input-" + id;

export const STORAGE_KEY = "chatgpt-next-web";

export const REQUEST_TIMEOUT_MS = 60000;

export const EXPORT_MESSAGE_CLASS_NAME = "export-markdown";

export const ServiceProvider = {
  OpenAI: "OpenAI",
  Azure: "Azure",
  Google: "Google",
  Anthropic: "Anthropic",
  Baidu: "Baidu",
  ByteDance: "ByteDance",
  Alibaba: "Alibaba",
  Tencent: "Tencent",
  Moonshot: "Moonshot",
  DeepSeek: "DeepSeek",
  Stability: "Stability",
  Iflytek: "Iflytek",
  XAI: "XAI",
  ChatGLM: "ChatGLM",
  SiliconFlow: "SiliconFlow",
  "302.AI": "302.AI",
};

// 🔴 核心修改：将默认模型改为 Gemini，去除 GPT 引用
export const DEFAULT_MODELS = [
  {
    name: "gemini-1.5-pro",
    available: true,
    provider: {
      id: "google",
      providerName: "Google",
      providerType: "google",
    },
  },
  {
    name: "gemini-1.5-flash",
    available: true,
    provider: {
      id: "google",
      providerName: "Google",
      providerType: "google",
    },
  },
  {
    name: "gemini-2.0-flash-exp",
    available: true,
    provider: {
      id: "google",
      providerName: "Google",
      providerType: "google",
    },
  },
] as const;

export const CHAT_PAGE_SIZE = 15;
export const MAX_RENDER_MSG_COUNT = 45;

// some famous webdav endpoints
export const suggestedWebDavEndpoints = [
  {
    name: "Fastmail",
    url: "https://my.files.fastmail.com/sd",
  },
  {
    name: "Koofr",
    url: "https://app.koofr.net/dav/NextChat",
  },
  {
    name: "TeraCloud",
    url: "https://seto.teracloud.jp/dav/",
  },
  {
    name: "OwnCloud",
    url: "https://example.com/remote.php/webdav/",
  },
  {
    name: "Nextcloud",
    url: "https://example.com/remote.php/webdav/",
  },
];

export const OPENAI_BASE_URL = "https://api.openai.com";
export const ANTHROPIC_BASE_URL = "https://api.anthropic.com";

export const GEMINI_BASE_URL = "https://generativelanguage.googleapis.com/";

export const BAIDU_BASE_URL = "https://aip.baidubce.com";
export const BAIDU_OAUTH_URL = "https://aip.baidubce.com/oauth/2.0/token";

export const BYTEDANCE_BASE_URL = "https://ark.cn-beijing.volces.com";

export const ALIBABA_BASE_URL = "https://dashscope.aliyuncs.com/api/";

export const TENCENT_BASE_URL = "https://hunyuan.tencentcloudapi.com";

export const MOONSHOT_BASE_URL = "https://api.moonshot.cn";
export const IFlyTek_BASE_URL = "https://spark-api-open.xf-yun.com";

export const CACHE_URL_PREFIX = "/api/cache";
export const UPLOAD_URL = "/api/upload";

// 🔴 核心修改：这里虽然保留定义，但在 settings.tsx 里我们已经把引用删了，防止报错保留空字符串
export const SAAS_CHAT_URL = ""; 
export const SAAS_CHAT_UTM = "";