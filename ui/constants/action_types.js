/*
  Constants for redux actions
  All names should be in present tense
  ex:
  XXX_START
  XXX_SUCCESS
  XXX_FAIL
  XXX_COMPLETE // if there is no fail case
*/

// redux-persist
export const REHYDRATE = 'persist/REHYDRATE';

// app
export const WINDOW_FOCUSED = 'WINDOW_FOCUSED';
export const DAEMON_READY = 'DAEMON_READY';
export const DAEMON_VERSION_MATCH = 'DAEMON_VERSION_MATCH';
export const DAEMON_VERSION_MISMATCH = 'DAEMON_VERSION_MISMATCH';
export const VOLUME_CHANGED = 'VOLUME_CHANGED';
export const VOLUME_MUTED = 'VOLUME_MUTED';
export const ADD_COMMENT = 'ADD_COMMENT';
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export const CHANGE_MODALS_ALLOWED = 'CHANGE_MODALS_ALLOWED';
export const TOGGLE_SEARCH_EXPANDED = 'TOGGLE_SEARCH_EXPANDED';
export const PASSWORD_SAVED = 'PASSWORD_SAVED';
export const SET_WELCOME_VERSION = 'SET_WELCOME_VERSION';
export const SET_ALLOW_ANALYTICS = 'SET_ALLOW_ANALYTICS';
export const SET_HAS_NAVIGATED = 'SET_HAS_NAVIGATED';
export const SET_SYNC_LOCK = 'SET_SYNC_LOCK';
export const TOGGLE_YOUTUBE_SYNC_INTEREST = 'TOGGLE_YOUTUBE_SYNC_INTEREST';
export const TOGGLE_SPLASH_ANIMATION = 'TOGGLE_SPLASH_ANIMATION';
export const SET_ACTIVE_CHANNEL = 'SET_ACTIVE_CHANNEL';
export const SET_INCOGNITO = 'SET_INCOGNITO';

// Navigation
export const CHANGE_AFTER_AUTH_PATH = 'CHANGE_AFTER_AUTH_PATH';
export const WINDOW_SCROLLED = 'WINDOW_SCROLLED';
export const HISTORY_NAVIGATE = 'HISTORY_NAVIGATE';

// Upgrades
export const UPGRADE_CANCELLED = 'UPGRADE_CANCELLED';
export const DOWNLOAD_UPGRADE = 'DOWNLOAD_UPGRADE';
export const UPGRADE_DOWNLOAD_STARTED = 'UPGRADE_DOWNLOAD_STARTED';
export const UPGRADE_DOWNLOAD_COMPLETED = 'UPGRADE_DOWNLOAD_COMPLETED';
export const UPGRADE_DOWNLOAD_PROGRESSED = 'UPGRADE_DOWNLOAD_PROGRESSED';
export const CHECK_UPGRADE_AVAILABLE = 'CHECK_UPGRADE_AVAILABLE';
export const CHECK_UPGRADE_START = 'CHECK_UPGRADE_START';
export const CHECK_UPGRADE_SUCCESS = 'CHECK_UPGRADE_SUCCESS';
export const CHECK_UPGRADE_FAIL = 'CHECK_UPGRADE_FAIL';
export const CHECK_UPGRADE_SUBSCRIBE = 'CHECK_UPGRADE_SUBSCRIBE';
export const UPDATE_VERSION = 'UPDATE_VERSION';
export const UPDATE_REMOTE_VERSION = 'UPDATE_REMOTE_VERSION';
export const SKIP_UPGRADE = 'SKIP_UPGRADE';
export const START_UPGRADE = 'START_UPGRADE';
export const AUTO_UPDATE_DECLINED = 'AUTO_UPDATE_DECLINED';
export const AUTO_UPDATE_DOWNLOADED = 'AUTO_UPDATE_DOWNLOADED';
export const CLEAR_UPGRADE_TIMER = 'CLEAR_UPGRADE_TIMER';

// Wallet
export const GET_NEW_ADDRESS_STARTED = 'GET_NEW_ADDRESS_STARTED';
export const GET_NEW_ADDRESS_COMPLETED = 'GET_NEW_ADDRESS_COMPLETED';
export const FETCH_TRANSACTIONS_STARTED = 'FETCH_TRANSACTIONS_STARTED';
export const FETCH_TRANSACTIONS_COMPLETED = 'FETCH_TRANSACTIONS_COMPLETED';
export const UPDATE_BALANCE = 'UPDATE_BALANCE';
export const CHECK_ADDRESS_IS_MINE_STARTED = 'CHECK_ADDRESS_IS_MINE_STARTED';
export const CHECK_ADDRESS_IS_MINE_COMPLETED = 'CHECK_ADDRESS_IS_MINE_COMPLETED';
export const SEND_TRANSACTION_STARTED = 'SEND_TRANSACTION_STARTED';
export const SEND_TRANSACTION_COMPLETED = 'SEND_TRANSACTION_COMPLETED';
export const SEND_TRANSACTION_FAILED = 'SEND_TRANSACTION_FAILED';
export const SUPPORT_TRANSACTION_STARTED = 'SUPPORT_TRANSACTION_STARTED';
export const SUPPORT_TRANSACTION_COMPLETED = 'SUPPORT_TRANSACTION_COMPLETED';
export const SUPPORT_TRANSACTION_FAILED = 'SUPPORT_TRANSACTION_FAILED';

// Claims
export const FETCH_FEATURED_CONTENT_STARTED = 'FETCH_FEATURED_CONTENT_STARTED';
export const FETCH_FEATURED_CONTENT_COMPLETED = 'FETCH_FEATURED_CONTENT_COMPLETED';
export const RESOLVE_URIS_STARTED = 'RESOLVE_URIS_STARTED';
export const RESOLVE_URIS_COMPLETED = 'RESOLVE_URIS_COMPLETED';
export const FETCH_CHANNEL_CLAIMS_STARTED = 'FETCH_CHANNEL_CLAIMS_STARTED';
export const FETCH_CHANNEL_CLAIMS_COMPLETED = 'FETCH_CHANNEL_CLAIMS_COMPLETED';
export const FETCH_CHANNEL_CLAIM_COUNT_STARTED = 'FETCH_CHANNEL_CLAIM_COUNT_STARTED';
export const FETCH_CLAIM_LIST_MINE_STARTED = 'FETCH_CLAIM_LIST_MINE_STARTED';
export const FETCH_CLAIM_LIST_MINE_COMPLETED = 'FETCH_CLAIM_LIST_MINE_COMPLETED';
export const ABANDON_CLAIM_STARTED = 'ABANDON_CLAIM_STARTED';
export const ABANDON_CLAIM_SUCCEEDED = 'ABANDON_CLAIM_SUCCEEDED';
export const FETCH_CHANNEL_LIST_STARTED = 'FETCH_CHANNEL_LIST_STARTED';
export const FETCH_CHANNEL_LIST_COMPLETED = 'FETCH_CHANNEL_LIST_COMPLETED';
export const CREATE_CHANNEL_STARTED = 'CREATE_CHANNEL_STARTED';
export const CREATE_CHANNEL_COMPLETED = 'CREATE_CHANNEL_COMPLETED';
export const PUBLISH_STARTED = 'PUBLISH_STARTED';
export const PUBLISH_COMPLETED = 'PUBLISH_COMPLETED';
export const PUBLISH_FAILED = 'PUBLISH_FAILED';
export const SET_PRIMARY_URI = 'SET_PRIMARY_URI';
export const SET_PLAYING_URI = 'SET_PLAYING_URI';
export const SET_CONTENT_POSITION = 'SET_CONTENT_POSITION';
export const CLEAR_CONTENT_POSITION = 'CLEAR_CONTENT_POSITION';
export const SET_CONTENT_LAST_VIEWED = 'SET_CONTENT_LAST_VIEWED';
export const CLEAR_CONTENT_HISTORY_URI = 'CLEAR_CONTENT_HISTORY_URI';
export const CLEAR_CONTENT_HISTORY_ALL = 'CLEAR_CONTENT_HISTORY_ALL';

// Files
export const FILE_LIST_STARTED = 'FILE_LIST_STARTED';
export const FILE_LIST_SUCCEEDED = 'FILE_LIST_SUCCEEDED';
export const FETCH_FILE_INFO_STARTED = 'FETCH_FILE_INFO_STARTED';
export const FETCH_FILE_INFO_COMPLETED = 'FETCH_FILE_INFO_COMPLETED';
export const FETCH_COST_INFO_STARTED = 'FETCH_COST_INFO_STARTED';
export const FETCH_COST_INFO_COMPLETED = 'FETCH_COST_INFO_COMPLETED';
export const LOADING_VIDEO_STARTED = 'LOADING_VIDEO_STARTED';
export const LOADING_VIDEO_COMPLETED = 'LOADING_VIDEO_COMPLETED';
export const LOADING_VIDEO_FAILED = 'LOADING_VIDEO_FAILED';
export const DOWNLOADING_STARTED = 'DOWNLOADING_STARTED';
export const DOWNLOADING_PROGRESSED = 'DOWNLOADING_PROGRESSED';
export const DOWNLOADING_COMPLETED = 'DOWNLOADING_COMPLETED';
export const PLAY_VIDEO_STARTED = 'PLAY_VIDEO_STARTED';
export const FETCH_AVAILABILITY_STARTED = 'FETCH_AVAILABILITY_STARTED';
export const FETCH_AVAILABILITY_COMPLETED = 'FETCH_AVAILABILITY_COMPLETED';
export const FILE_DELETE = 'FILE_DELETE';

// Search
export const SEARCH_START = 'SEARCH_START';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAIL = 'SEARCH_FAIL';
export const UPDATE_SEARCH_OPTIONS = 'UPDATE_SEARCH_OPTIONS';
export const UPDATE_SEARCH_SUGGESTIONS = 'UPDATE_SEARCH_SUGGESTIONS';

// Settings
export const DAEMON_SETTINGS_RECEIVED = 'DAEMON_SETTINGS_RECEIVED';
export const CLIENT_SETTING_CHANGED = 'CLIENT_SETTING_CHANGED';
export const UPDATE_IS_NIGHT = 'UPDATE_IS_NIGHT';
export const FINDING_FFMPEG_STARTED = 'FINDING_FFMPEG_STARTED';
export const FINDING_FFMPEG_COMPLETED = 'FINDING_FFMPEG_COMPLETED';
export const SYNC_CLIENT_SETTINGS = 'SYNC_CLIENT_SETTINGS';

// User
export const AUTHENTICATION_STARTED = 'AUTHENTICATION_STARTED';
export const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS';
export const AUTHENTICATION_FAILURE = 'AUTHENTICATION_FAILURE';
export const USER_EMAIL_DECLINE = 'USER_EMAIL_DECLINE';
export const USER_EMAIL_NEW_STARTED = 'USER_EMAIL_NEW_STARTED';
export const USER_EMAIL_NEW_SUCCESS = 'USER_EMAIL_NEW_SUCCESS';
export const USER_EMAIL_NEW_EXISTS = 'USER_EMAIL_NEW_EXISTS';
export const USER_EMAIL_NEW_DOES_NOT_EXIST = 'USER_EMAIL_NEW_DOES_NOT_EXIST';
export const USER_EMAIL_NEW_FAILURE = 'USER_EMAIL_NEW_FAILURE';
export const USER_EMAIL_NEW_CLEAR_ENTRY = 'USER_EMAIL_NEW_CLEAR_ENTRY';
export const USER_EMAIL_VERIFY_SET = 'USER_EMAIL_VERIFY_SET';
export const USER_EMAIL_VERIFY_STARTED = 'USER_EMAIL_VERIFY_STARTED';
export const USER_EMAIL_VERIFY_SUCCESS = 'USER_EMAIL_VERIFY_SUCCESS';
export const USER_EMAIL_VERIFY_FAILURE = 'USER_EMAIL_VERIFY_FAILURE';
export const USER_EMAIL_VERIFY_RETRY_STARTED = 'USER_EMAIL_VERIFY_RETRY_STARTED';
export const USER_EMAIL_VERIFY_RETRY_FAILURE = 'USER_EMAIL_VERIFY_RETRY_FAILURE';
export const USER_EMAIL_VERIFY_RETRY_SUCCESS = 'USER_EMAIL_VERIFY_RETRY_SUCCESS';
export const USER_PASSWORD_EXISTS = 'USER_PASSWORD_EXISTS';
export const USER_PASSWORD_RESET_STARTED = 'USER_PASSWORD_RESET_STARTED';
export const USER_PASSWORD_RESET_SUCCESS = 'USER_PASSWORD_RESET_SUCCESS';
export const USER_PASSWORD_RESET_FAILURE = 'USER_PASSWORD_RESET_FAILURE';
export const USER_PASSWORD_SET_STARTED = 'USER_PASSWORD_SET_STARTED';
export const USER_PASSWORD_SET_SUCCESS = 'USER_PASSWORD_SET_SUCCESS';
export const USER_PASSWORD_SET_FAILURE = 'USER_PASSWORD_SET_FAILURE';
export const USER_PASSWORD_SET_CLEAR = 'USER_PASSWORD_SET_CLEAR';
export const USER_PHONE_RESET = 'USER_PHONE_RESET';
export const USER_PHONE_NEW_STARTED = 'USER_PHONE_NEW_STARTED';
export const USER_PHONE_NEW_SUCCESS = 'USER_PHONE_NEW_SUCCESS';
export const USER_PHONE_NEW_FAILURE = 'USER_PHONE_NEW_FAILURE';
export const USER_PHONE_VERIFY_STARTED = 'USER_PHONE_VERIFY_STARTED';
export const USER_PHONE_VERIFY_SUCCESS = 'USER_PHONE_VERIFY_SUCCESS';
export const USER_PHONE_VERIFY_FAILURE = 'USER_PHONE_VERIFY_FAILURE';
export const USER_IDENTITY_VERIFY_STARTED = 'USER_IDENTITY_VERIFY_STARTED';
export const USER_IDENTITY_VERIFY_SUCCESS = 'USER_IDENTITY_VERIFY_SUCCESS';
export const USER_IDENTITY_VERIFY_FAILURE = 'USER_IDENTITY_VERIFY_FAILURE';
export const USER_FETCH_STARTED = 'USER_FETCH_STARTED';
export const USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS';
export const USER_FETCH_FAILURE = 'USER_FETCH_FAILURE';
export const USER_INVITE_STATUS_FETCH_STARTED = 'USER_INVITE_STATUS_FETCH_STARTED';
export const USER_INVITE_STATUS_FETCH_SUCCESS = 'USER_INVITE_STATUS_FETCH_SUCCESS';
export const USER_INVITE_STATUS_FETCH_FAILURE = 'USER_INVITE_STATUS_FETCH_FAILURE';
export const USER_INVITE_NEW_STARTED = 'USER_INVITE_NEW_STARTED';
export const USER_INVITE_NEW_SUCCESS = 'USER_INVITE_NEW_SUCCESS';
export const USER_INVITE_NEW_FAILURE = 'USER_INVITE_NEW_FAILURE';
export const FETCH_ACCESS_TOKEN_SUCCESS = 'FETCH_ACCESS_TOKEN_SUCCESS';
export const USER_YOUTUBE_IMPORT_STARTED = 'USER_YOUTUBE_IMPORT_STARTED';
export const USER_YOUTUBE_IMPORT_FAILURE = 'USER_YOUTUBE_IMPORT_FAILURE';
export const USER_YOUTUBE_IMPORT_SUCCESS = 'USER_YOUTUBE_IMPORT_SUCCESS';
export const USER_SET_REFERRER_STARTED = 'USER_SET_REFERRER_STARTED';
export const USER_SET_REFERRER_SUCCESS = 'USER_SET_REFERRER_SUCCESS';
export const USER_SET_REFERRER_FAILURE = 'USER_SET_REFERRER_FAILURE';
export const USER_SET_REFERRER_RESET = 'USER_SET_REFERRER_RESET';

// Rewards
export const FETCH_REWARDS_STARTED = 'FETCH_REWARDS_STARTED';
export const FETCH_REWARDS_COMPLETED = 'FETCH_REWARDS_COMPLETED';
export const CLAIM_REWARD_STARTED = 'CLAIM_REWARD_STARTED';
export const CLAIM_REWARD_SUCCESS = 'CLAIM_REWARD_SUCCESS';
export const CLAIM_REWARD_FAILURE = 'CLAIM_REWARD_FAILURE';
export const CLAIM_REWARD_CLEAR_ERROR = 'CLAIM_REWARD_CLEAR_ERROR';
export const FETCH_REWARD_CONTENT_COMPLETED = 'FETCH_REWARD_CONTENT_COMPLETED';

// Language
export const DOWNLOAD_LANGUAGE_SUCCESS = 'DOWNLOAD_LANGUAGE_SUCCESS';
export const DOWNLOAD_LANGUAGE_FAILURE = 'DOWNLOAD_LANGUAGE_FAILURE';

// Subscriptions
export const CHANNEL_SUBSCRIBE = 'CHANNEL_SUBSCRIBE';
export const CHANNEL_UNSUBSCRIBE = 'CHANNEL_UNSUBSCRIBE';
export const HAS_FETCHED_SUBSCRIPTIONS = 'HAS_FETCHED_SUBSCRIPTIONS';
export const CHECK_SUBSCRIPTION_STARTED = 'CHECK_SUBSCRIPTION_STARTED';
export const CHECK_SUBSCRIPTION_COMPLETED = 'CHECK_SUBSCRIPTION_COMPLETED';
export const CHECK_SUBSCRIPTIONS_SUBSCRIBE = 'CHECK_SUBSCRIPTIONS_SUBSCRIBE';
export const FETCH_SUBSCRIPTIONS_START = 'FETCH_SUBSCRIPTIONS_START';
export const FETCH_SUBSCRIPTIONS_FAIL = 'FETCH_SUBSCRIPTIONS_FAIL';
export const FETCH_SUBSCRIPTIONS_SUCCESS = 'FETCH_SUBSCRIPTIONS_SUCCESS';
export const SET_VIEW_MODE = 'SET_VIEW_MODE';

// Publishing
export const CLEAR_PUBLISH = 'CLEAR_PUBLISH';
export const UPDATE_PUBLISH_FORM = 'UPDATE_PUBLISH_FORM';
export const PUBLISH_START = 'PUBLISH_START';
export const PUBLISH_SUCCESS = 'PUBLISH_SUCCESS';
export const PUBLISH_FAIL = 'PUBLISH_FAIL';
export const CLEAR_PUBLISH_ERROR = 'CLEAR_PUBLISH_ERROR';
export const REMOVE_PENDING_PUBLISH = 'REMOVE_PENDING_PUBLISH';
export const DO_PREPARE_EDIT = 'DO_PREPARE_EDIT';

// Media
export const MEDIA_PLAY = 'MEDIA_PLAY';
export const MEDIA_PAUSE = 'MEDIA_PAUSE';

// Notifications
export const NOTIFICATION_LIST_STARTED = 'NOTIFICATION_LIST_STARTED';
export const NOTIFICATION_LIST_COMPLETED = 'NOTIFICATION_LIST_COMPLETED';
export const NOTIFICATION_LIST_FAILED = 'NOTIFICATION_LIST_FAILED';
export const NOTIFICATION_READ_STARTED = 'NOTIFICATION_READ_STARTED';
export const NOTIFICATION_READ_COMPLETED = 'NOTIFICATION_READ_COMPLETED';
export const NOTIFICATION_READ_FAILED = 'NOTIFICATION_READ_FAILED';
export const NOTIFICATION_SEEN_STARTED = 'NOTIFICATION_SEEN_STARTED';
export const NOTIFICATION_SEEN_COMPLETED = 'NOTIFICATION_SEEN_COMPLETED';
export const NOTIFICATION_SEEN_FAILED = 'NOTIFICATION_SEEN_FAILED';
export const NOTIFICATION_DELETE_STARTED = 'NOTIFICATION_DELETE_STARTED';
export const NOTIFICATION_DELETE_COMPLETED = 'NOTIFICATION_DELETE_COMPLETED';
export const NOTIFICATION_DELETE_FAILED = 'NOTIFICATION_DELETE_FAILED';
export const CREATE_TOAST = 'CREATE_TOAST';
export const DISMISS_TOAST = 'DISMISS_TOAST';
export const CREATE_ERROR = 'CREATE_ERROR';
export const DISMISS_ERROR = 'DISMISS_ERROR';

// Comments
export const COMMENT_LIST_STARTED = 'COMMENT_LIST_STARTED';
export const COMMENT_LIST_COMPLETED = 'COMMENT_LIST_COMPLETED';
export const COMMENT_LIST_FAILED = 'COMMENT_LIST_FAILED';
export const COMMENT_CREATE_STARTED = 'COMMENT_CREATE_STARTED';
export const COMMENT_CREATE_COMPLETED = 'COMMENT_CREATE_COMPLETED';
export const COMMENT_CREATE_FAILED = 'COMMENT_CREATE_FAILED';
export const COMMENT_ABANDON_STARTED = 'COMMENT_ABANDON_STARTED';
export const COMMENT_ABANDON_COMPLETED = 'COMMENT_ABANDON_COMPLETED';
export const COMMENT_ABANDON_FAILED = 'COMMENT_ABANDON_FAILED';
export const COMMENT_UPDATE_STARTED = 'COMMENT_UPDATE_STARTED';
export const COMMENT_UPDATE_COMPLETED = 'COMMENT_UPDATE_COMPLETED';
export const COMMENT_UPDATE_FAILED = 'COMMENT_UPDATE_FAILED';
export const COMMENT_HIDE_STARTED = 'COMMENT_HIDE_STARTED';
export const COMMENT_HIDE_COMPLETED = 'COMMENT_HIDE_COMPLETED';
export const COMMENT_HIDE_FAILED = 'COMMENT_HIDE_FAILED';
export const COMMENT_REACTION_LIST_STARTED = 'COMMENT_REACTION_LIST_STARTED';
export const COMMENT_REACTION_LIST_COMPLETED = 'COMMENT_REACTION_LIST_COMPLETED';
export const COMMENT_REACTION_LIST_FAILED = 'COMMENT_REACTION_LIST_FAILED';
export const COMMENT_REACT_STARTED = 'COMMENT_REACT_STARTED';
export const COMMENT_REACT_COMPLETED = 'COMMENT_REACT_COMPLETED';
export const COMMENT_REACT_FAILED = 'COMMENT_REACT_FAILED';
export const COMMENT_PIN_STARTED = 'COMMENT_PIN_STARTED';
export const COMMENT_PIN_COMPLETED = 'COMMENT_PIN_COMPLETED';
export const COMMENT_PIN_FAILED = 'COMMENT_PIN_FAILED';
export const COMMENT_MODERATION_BLOCK_LIST_STARTED = 'COMMENT_MODERATION_BLOCK_LIST_STARTED';
export const COMMENT_MODERATION_BLOCK_LIST_COMPLETED = 'COMMENT_MODERATION_BLOCK_LIST_COMPLETED';
export const COMMENT_MODERATION_BLOCK_LIST_FAILED = 'COMMENT_MODERATION_BLOCK_LIST_FAILED';
export const COMMENT_MODERATION_BLOCK_STARTED = 'COMMENT_MODERATION_BLOCK_STARTED';
export const COMMENT_MODERATION_BLOCK_COMPLETE = 'COMMENT_MODERATION_BLOCK_COMPLETE';
export const COMMENT_MODERATION_BLOCK_FAILED = 'COMMENT_MODERATION_BLOCK_FAILED';
export const COMMENT_MODERATION_UN_BLOCK_STARTED = 'COMMENT_MODERATION_UN_BLOCK_STARTED';
export const COMMENT_MODERATION_UN_BLOCK_COMPLETE = 'COMMENT_MODERATION_UN_BLOCK_COMPLETE';
export const COMMENT_MODERATION_UN_BLOCK_FAILED = 'COMMENT_MODERATION_UN_BLOCK_FAILED';
export const COMMENT_RECEIVED = 'COMMENT_RECEIVED';

// Blocked channels
export const TOGGLE_BLOCK_CHANNEL = 'TOGGLE_BLOCK_CHANNEL';

// Coin swap
export const ADD_COIN_SWAP = 'ADD_COIN_SWAP';
export const REMOVE_COIN_SWAP = 'REMOVE_COIN_SWAP';
export const COIN_SWAP_STATUS_RECEIVED = 'COIN_SWAP_STATUS_RECEIVED';

// Tags
export const TOGGLE_TAG_FOLLOW = 'TOGGLE_TAG_FOLLOW';
export const TAG_ADD = 'TAG_ADD';
export const TAG_DELETE = 'TAG_DELETE';

// Notifications
export const WS_CONNECT = 'WS_CONNECT';
export const WS_DISCONNECT = 'WS_DISCONNECT';

// Cross-device Sync
export const GET_SYNC_STARTED = 'GET_SYNC_STARTED';
export const GET_SYNC_COMPLETED = 'GET_SYNC_COMPLETED';
export const GET_SYNC_FAILED = 'GET_SYNC_FAILED';
export const SET_SYNC_STARTED = 'SET_SYNC_STARTED';
export const SET_SYNC_FAILED = 'SET_SYNC_FAILED';
export const SET_SYNC_COMPLETED = 'SET_SYNC_COMPLETED';
export const SET_PREFS_READY = 'SET_PREFS_READY';
export const SET_DEFAULT_ACCOUNT = 'SET_DEFAULT_ACCOUNT';
export const SYNC_APPLY_STARTED = 'SYNC_APPLY_STARTED';
export const SYNC_APPLY_COMPLETED = 'SYNC_APPLY_COMPLETED';
export const SYNC_APPLY_FAILED = 'SYNC_APPLY_FAILED';
export const SYNC_APPLY_BAD_PASSWORD = 'SYNC_APPLY_BAD_PASSWORD';
export const SYNC_RESET = 'SYNC_RESET';
export const SYNC_FATAL_ERROR = 'SYNC_FATAL_ERROR';

export const REACTIONS_LIST_STARTED = 'REACTIONS_LIST_STARTED';
export const REACTIONS_LIST_FAILED = 'REACTIONS_LIST_FAILED';
export const REACTIONS_LIST_COMPLETED = 'REACTIONS_LIST_COMPLETED';
export const REACTIONS_NEW_STARTED = 'REACTIONS_NEW_STARTED';
export const REACTIONS_NEW_FAILED = 'REACTIONS_NEW_FAILED';
export const REACTIONS_LIKE_COMPLETED = 'REACTIONS_LIKE_COMPLETED';
export const REACTIONS_DISLIKE_COMPLETED = 'REACTIONS_DISLIKE_COMPLETED';
