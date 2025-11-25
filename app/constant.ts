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

// 🟢 你的品牌设置（保持不变）
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

export const DEFAULT_SIDEBAR_WIDTH = 300;
export const MAX_SIDEBAR_WIDTH = 500;
export const MIN_SIDEBAR_WIDTH = 230;
export const NARROW_SIDEBAR_WIDTH = 100;

export const ACCESS_CODE_PREFIX = "nk-";

export const LAST_INPUT_KEY = "last-input";
export const UNFINISHED_INPUT = (id: string) => "unfinished-input-" + id;

export const STORAGE_KEY = "chatgpt-next-web";

export const REQUEST_TIMEOUT_MS = 60000;
export const REQUEST_TIMEOUT_MS_FOR_THINKING = 60000;

export const EXPORT_MESSAGE_CLASS_NAME = "export-markdown";

export enum ServiceProvider {
  OpenAI = "OpenAI",
  Azure = "Azure",
  Google = "Google",
  Anthropic = "Anthropic",
  Baidu = "Baidu",
  ByteDance = "ByteDance",
  Alibaba = "Alibaba",
  Tencent = "Tencent",
  Moonshot = "Moonshot",
  DeepSeek = "DeepSeek",
  Stability = "Stability",
  Iflytek = "Iflytek",
  XAI = "XAI",
  ChatGLM = "ChatGLM",
  SiliconFlow = "SiliconFlow",
  "302.AI" = "302.AI",
}

// 🟢 补回缺失的 ModelProvider 定义（代码编译需要）
export enum ModelProvider {
  GPT = "GPT",
  Gemini = "Gemini",
  Claude = "Claude",
  Ernie = "Ernie",
  Doubao = "Doubao",
  Qwen = "Qwen",
  Hunyuan = "Hunyuan",
  Moonshot = "Moonshot",
  DeepSeek = "DeepSeek",
  Stability = "Stability",
  Iflytek = "Iflytek",
  XAI = "XAI",
  ChatGLM = "ChatGLM",
  SiliconFlow = "SiliconFlow",
  "302.AI" = "302.AI",
}

export const DEFAULT_INPUT_TEMPLATE = `{{input}}`;
export const DEFAULT_SYSTEM_TEMPLATE = `
You are ChatGPT, a large language model trained by OpenAI.
Knowledge cutoff: {{cutoff}}
Current model: {{model}}
Current time: {{time}}
Latext inline: $x^2$ 
Latext block: $$e=mc^2$$
`;

export const MCP_TOOLS_TEMPLATE = `
Tools:
{{tools}}
`;

export const MCP_SYSTEM_TEMPLATE = `
The user has requested to use the following tools:
{{tools}}
`;

export const SUMMARIZE_MODEL = "gpt-4o-mini";
export const GEMINI_SUMMARIZE_MODEL = "gemini-pro";
export const DEEPSEEK_SUMMARIZE_MODEL = "deepseek-chat";

export const KnowledgeCutOffDate = {
  default: "2021-09",
  "gpt-4-turbo": "2023-12-01",
  "gpt-4-turbo-2024-04-09": "2023-12-01",
  "gpt-4o": "2023-10-01",
  "gemini-pro": "2023-12-01",
  "gemini-pro-vision": "2023-12-01",
};

export const DEFAULT_TTS_ENGINE = "OpenAI-TTS";
export const DEFAULT_TTS_MODEL = "tts-1";
export const DEFAULT_TTS_VOICE = "alloy";

// 🟢 你的默认模型设置（保持不变）
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

// 🟢 补回所有缺失的 URL 常量
export const OPENAI_BASE_URL = "https://api.openai.com";
export const ANTHROPIC_BASE_URL = "https://api.anthropic.com";
export const GEMINI_BASE_URL = "https://generativelanguage.googleapis.com/";
export const BAIDU_BASE_URL = "https://aip.baidubce.com";
export const BAIDU_OAUTH_URL = "https://aip.baidubce.com/oauth/2.0/token";
export const BYTEDANCE_BASE_URL = "https://ark.cn-beijing.volces.com/api/";
export const ALIBABA_BASE_URL = "https://dashscope.aliyuncs.com/api/";
export const TENCENT_BASE_URL = "https://hunyuan.tencentcloudapi.com";
export const MOONSHOT_BASE_URL = "https://api.moonshot.cn";
export const IFlyTek_BASE_URL = "https://spark-api-open.xf-yun.com";
export const DEEPSEEK_BASE_URL = "https://api.deepseek.com";
export const XAI_BASE_URL = "https://api.x.ai/v1";
export const CHATGLM_BASE_URL = "https://open.bigmodel.cn/api/paas/v4";
export const SILICONFLOW_BASE_URL = "https://api.siliconflow.cn/v1";
export const STABILITY_BASE_URL = "https://api.stability.ai";
export const AI302_BASE_URL = "https://api.302.ai/v1";

export const CACHE_URL_PREFIX = "/api/cache";
export const UPLOAD_URL = "/api/upload";

export const SAAS_CHAT_URL = ""; 
export const SAAS_CHAT_UTM_URL = "";
export const DEFAULT_GA_ID = "";

// 🟢 补回 OpenaiPath 定义
export const OpenaiPath = {
  ChatPath: "v1/chat/completions",
  UsagePath: "dashboard/billing/usage",
  SubsPath: "dashboard/billing/subscription",
  ListModelPath: "v1/models",
};

// 🟢 补回各厂商配置对象
export const Azure = {
  ExampleEndpoint: "https://{resource-name}.openai.azure.com",
};

export const Google = {
  ExampleEndpoint: "https://generativelanguage.googleapis.com/",
  Vision: "gemini-pro-vision",
};

export const Anthropic = {
  ChatPath: "v1/messages",
  ExampleEndpoint: "https://api.anthropic.com",
  Vision: "2023-06-01",
};

export const Baidu = {
  ExampleEndpoint: BAIDU_BASE_URL,
};

export const ByteDance = {
  ExampleEndpoint: "https://ark.cn-beijing.volces.com/api/",
};

export const Alibaba = {
  ExampleEndpoint: ALIBABA_BASE_URL,
};

export const Tencent = {
  ExampleEndpoint: TENCENT_BASE_URL,
};

export const Moonshot = {
  ExampleEndpoint: MOONSHOT_BASE_URL,
};

export const DeepSeek = {
  ExampleEndpoint: DEEPSEEK_BASE_URL,
};

export const Stability = {
  ExampleEndpoint: STABILITY_BASE_URL,
};

export const Iflytek = {
  ExampleEndpoint: IFlyTek_BASE_URL,
};

export const XAI = {
  ExampleEndpoint: XAI_BASE_URL,
};

export const ChatGLM = {
  ExampleEndpoint: CHATGLM_BASE_URL,
};

export const SiliconFlow = {
  ExampleEndpoint: SILICONFLOW_BASE_URL,
};

export const AI302 = {
  ExampleEndpoint: AI302_BASE_URL,
};

export const VISION_MODEL_REGEXES = [
  /vision/,
  /gemini-1\.5/,
  /gemini-pro-vision/,
  /gpt-4o/,
  /gpt-4-turbo/,
  /claude-3/,
];

export const EXCLUDE_VISION_MODEL_REGEXES = [
  /claude-3-haiku/,
];