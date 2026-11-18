// ============================================================
// Locket Remote Config Rewrite (Clean - No Welcome Popup)
// Endpoint: firebaseremoteconfig.googleapis.com
// ============================================================

var ua = (typeof $request !== "undefined" && $request && $request.headers) ? ($request.headers["User-Agent"] || $request.headers["user-agent"] || "") : "";
var obj = {};
try {
    obj = JSON.parse($response.body);
} catch (e) {
    obj = {};
}

if (!obj || typeof obj !== "object") {
    obj = {};
}

obj.state = "UPDATE";
obj.templateVersion = String(Date.now());

obj.entries = obj.entries || {};
obj.entries.cache_ttl_seconds = "0";
obj.entries.client_cache_ttl_sec = "0";

// Xóa hoàn toàn popup chào mừng khi mở ứng dụng
if ("feature_discovery_popup_config" in obj.entries) {
    delete obj.entries.feature_discovery_popup_config;
}

// ============================================================
// 1. CẤU HÌNH GOLD, FEATURE GATES & PAYWALL
// ============================================================
Object.assign(obj.entries, {
    feature_gates: JSON.stringify({
        app_icon_picker: "enabled",
        camera_roll: "enabled",
        camera_roll_video: "enabled",
        camera_roll_video_30s: "enabled",
        camera_roll_video_upload: "enabled",
        camera_roll_video_upload_30s: "enabled",
        camera_roll_longer_video: "enabled",
        camera_roll_longer_video_30s: "enabled",
        camera_theme: "enabled",
        locket_views: "enabled",
        long_captions: "enabled",
        longer_video: "enabled",
        longer_video_30s: "enabled",
        extended_video_30s: "enabled",
        photo_library_video: "enabled",
        photo_library_video_30s: "enabled",
        gallery_video: "enabled",
        gallery_video_30s: "enabled",
        can_upload_30s_video: "enabled",
        can_record_30s_video: "enabled",
        allow_longer_video_upload: "enabled",
        longer_video_upload: "enabled",
        unlimited_friends: "enabled",
        priority_support: "enabled",
        profile_badge: "enabled",
        profileBadge: "enabled",
        gold_since_badge: "enabled",
        goldSinceBadge: "enabled",
        gold_badge_profile_menu: "enabled",
        remove_ads: "enabled",
        video: "enabled",
        video_15s: "enabled",
        video_30s: "enabled",
        video_40s: "enabled",
        video_60s: "enabled",
        video_upload: "enabled",
        video_upload_30s: "enabled",
        custom_widget_frames: "enabled",
        streak_recovery: "enabled",
        streakRecovery: "enabled",
        streaks: "enabled",
        streak: "enabled",
        streak_visualizations: "enabled",
        streak_badge: "enabled",
        groups: "enabled",
        private_mode: "enabled",
        viewer_mode: "enabled",
        close_friends: "enabled",
        camera_filter_sheet: "enabled",
        camera_filters: "enabled",
        camera_filter: "enabled",
        filter: "enabled",
        filters: "enabled",
        photo_filters: "enabled",
        ai_filters: "disabled",
        holiday_effects: "enabled",
        holiday_filters: "enabled",
        holiday_filter: "enabled",
        ar_filters: "enabled",
        face_filters: "enabled",
        profile_cover: "enabled",
        profile_cover_photo: "enabled",
        profile_customization: "enabled"
    }),
    upsell_features: JSON.stringify({
        app_icon_picker: false,
        camera_roll: false,
        camera_theme: false,
        locket_views: false,
        remove_ads: false,
        custom_widget_frames: false,
        filter: false,
        filters: false,
        camera_filter: false,
        camera_filters: false,
        holiday_filter: false,
        holiday_filters: false,
        holiday_effects: false,
        ai_filter: false,
        ai_filters: false
    }),
    paywall_presentation_config: JSON.stringify({
        uid: "paywall_testflight",
        onboarding: false,
        after_sent_moment: false,
        after_moment: false,
        after_capture: false,
        on_foreground: false,
        holiday_effects: false,
        camera_filters: false,
        camera_filter: false,
        filters: false,
        filter: false,
        ai_filter: false,
        ai_filters: false,
        filtered_image: false,
        filtered_images: false,
        generate_filtered_image: false,
        interval: 2592000,
        profile_banner: true
    }),
    android_subscribe_gold_button_enabled: "false",
    profile_badge_visible: "true",
    lunar_new_year_app_icon_enabled: "true",

    country_code: "US",
    region_code: "US",
    is_us_user: "true",
    camera_filters_enabled: "true",
    camera_filter_enabled: "true",
    holiday_filters_enabled: "true",
    ai_filters_enabled: "true",
    camera_filter_gold_only: "false",
    camera_filters_gold_only: "false",
    holiday_filters_gold_only: "false",
    filter_gold_only: "false",
    filters_gold_only: "false",
    ai_filter_gold_only: "false",
    ai_filters_gold_only: "false",
    filter_paywall_enabled: "false",
    camera_filter_paywall_enabled: "false",
    filter_upsell_enabled: "false",
    require_gold_for_filters: "false",
    require_gold_for_filter: "false",
    requires_gold_for_filters: "false",
    requires_gold_for_filter: "false",
    requires_gold_for_camera_filters: "false",
    camera_filter_requires_gold: "false",
    camera_filters_require_gold: "false",
    ai_filter_requires_gold: "false",
    ai_filters_require_gold: "false",
    filter_requires_gold: "false",
    filters_require_gold: "false",
    filtered_image_requires_gold: "false",
    filtered_images_require_gold: "false",
    filtered_image_gold_only: "false",
    filtered_images_gold_only: "false",
    free_filters_enabled: "true",
    filter_selection_enabled: "true",
    camera_filter_sheet_selection_enabled: "true",
    sheet_filters_selectable: "true",
    dismiss_filter_sheet_on_select: "true",
    is_gold: "true",
    has_gold: "true",
    is_gold_user: "true",
    user_is_gold: "true",
    gold_user: "true",
    gold_active: "true",
    all_filters_free: "true",
    unlocked_filters: "true",
    camera_filter_max_count: "50",
    max_camera_filters: "50"
});

// ============================================================
// 2. CHẶN QUẢNG CÁO & TẮT TRACKING (SENTRY)
// ============================================================
Object.assign(obj.entries, {
    history_ads_mode: "off",
    history_ads_prefetch_count: "0",
    history_ads_prefetch_immediate: "false",
    history_ads_prefetch_reroute: "false",
    history_ads_dynamic_insertion: "false",
    history_ads_refresh_prefetch_on_foreground: "false",
    history_ads_floor_price: "0",
    history_ads_floor_price_att: "0",
    history_ad_log_displayed_on_background: "false",
    history_ads_debug_menu: "false",
    sentry_sample_rate: "0",
    sentry_network_tracing: "false",
    sentry_performance_tracking: "false",
    sentry_trace_sample_rate: "0",
    sentry_profiles_sample_rate: "0"
});

// ============================================================
// 3. CAMERA, VIDEO & UPLOAD QUALITY (45 GIÂY)
// ============================================================
var MY_VIDEO_DURATION = 45.0;
var durationStr = MY_VIDEO_DURATION.toString();
var MAX_SIZE_BYTES = 104857600;

var cameraConfig = {
    gold_max_duration: MY_VIDEO_DURATION,
    goldMaxDuration: MY_VIDEO_DURATION,
    max_duration: MY_VIDEO_DURATION,
    maxDuration: MY_VIDEO_DURATION,
    ultra_wide: true,
    ultraWide: true,
    volume_button: true,
    volumeButton: true,
    flash_button: true,
    telephoto: true,
    srgb: true,
    lanczos: true,
    quality_mbps: 0.6,
    qualityMbps: 0.6
};

var cameraRollConfig = {
    gold_max_duration: MY_VIDEO_DURATION,
    goldMaxDuration: MY_VIDEO_DURATION,
    video_max_duration: MY_VIDEO_DURATION,
    videoMaxDuration: MY_VIDEO_DURATION,
    max_duration: MY_VIDEO_DURATION,
    maxDuration: MY_VIDEO_DURATION,
    trim_max_duration: MY_VIDEO_DURATION,
    trimMaxDuration: MY_VIDEO_DURATION,
    camera_roll_max_duration: MY_VIDEO_DURATION,
    camera_roll_video_max_duration: MY_VIDEO_DURATION,
    max_file_size: MAX_SIZE_BYTES,
    max_upload_bytes: MAX_SIZE_BYTES,
    max_size_bytes: MAX_SIZE_BYTES,
    quality_mbps: 0.6,
    qualityMbps: 0.6,
    flash_button: true
};

obj.entries.camera = JSON.stringify(cameraConfig);
obj.entries.camera_roll = JSON.stringify(cameraRollConfig);

Object.assign(obj.entries, {
    live_photos: JSON.stringify({
        capture: true,
        video: true,
        viewing: true,
        catch_up: true,
        widget_looping_mode: "never"
    }),
    camera_roll_preview_enabled: "true",
    camera_roll_video_enabled: "true",
    camera_roll_video_upload_enabled: "true",
    internal_camera_roll_video_upload_enabled: "true",
    longer_camera_roll_videos_enabled: "true",
    camera_roll_video_max_duration: durationStr,
    camera_roll_max_duration: durationStr,
    camera_roll_duration: durationStr,
    max_video_duration: durationStr,
    video_max_duration: durationStr,
    video_trim_max_duration: durationStr,
    trim_max_duration: durationStr,
    gold_max_duration: durationStr,
    goldMaxDuration: durationStr,
    max_file_size: MAX_SIZE_BYTES.toString(),
    max_upload_bytes: MAX_SIZE_BYTES.toString(),
    video_quality_mbps: "0.6",
    video_sound_enabled: "true",
    microphone_enabled: "true",
    camera_microphone_enabled: "true",
    audio_session_deactivation_enabled: "true",
    zoom_enabled: "true",
    upload_main: "false",
    upload_main_image_quality: "1.0",
    upload_main_image_size: "1440",
    upload_thumbnail_image_quality: "1.0",
    upload_thumbnail_image_size: "1020"
});

// ============================================================
// 4. BẠN BÈ, GIỚI HẠN & ĐỀ XUẤT KẾT BẠN
// ============================================================
Object.assign(obj.entries, {
    max_friends_count: "999999",
    friend_limit_mode: "disabled",
    soft_friend_limit_threshold_count: "999999",
    show_friend_limit_on_cam: "false",
    signup_max_friends_count: "999999",
    celebrity_inbox_limit: "999999",
    celebrity_inbox_enabled: "true",
    celebrity_vip_qr_redemption_enabled: "true",
    friend_limit_geo_override: JSON.stringify({ experiments: {}, area_code_overrides: {} }),
    friends_sheet_locket_count_config: JSON.stringify({
        items: [
            { threshold: 0, icon_name: "heart" },
            { threshold: 1, icon_name: "heart.fill" },
            { threshold: 10, emoji: "🤍" },
            { threshold: 100, emoji: "💛" },
            { threshold: 500, emoji: "❤️‍🔥" },
            { threshold: 1000, emoji: "🌟🫶🌟" },
            { threshold: 2000, emoji: "✨💟✨" },
            { threshold: 5000, emoji: "⚡️😵‍💫⚡" },
            { threshold: 10000, emoji: "✨⚡️😱⚡✨" }
        ]
    }),
    friend_locket_count_config: JSON.stringify({
        items: [
            { threshold: 0, icon_name: "heart" },
            { threshold: 1, icon_name: "heart.fill" },
            { threshold: 10, emoji: "🤍" },
            { threshold: 100, emoji: "💛" },
            { threshold: 500, emoji: "❤️‍🔥" },
            { threshold: 1000, emoji: "✨💗✨" },
            { threshold: 2000, emoji: "✨️⭐️✨" },
            { threshold: 5000, emoji: "✨💎✨" },
            { threshold: 10000, emoji: "✨🔐💛✨" }
        ]
    }),
    new_friends_monitoring_enabled: "true",
    improved_friend_suggestions: "false",
    show_friend_suggestions_by_default: "false",
    emoji_friend_suggestions: "false",
    prompt_contact_permissions_on_search: "false",
    populate_phone_numbers_from_suggest_friends: "false",
    hide_friends_enabled: "false",
    hide_invite_links: "false",
    hide_skip_contacts: "false",
    show_all_contacts: "false",
    show_invite_suggestions: "false",
    show_no_friends_bottom_sheet: "false",
    signup_allow_skip_add_friends: "true",
    signup_custom_profile_picture: "true",
    user_data_export_enabled: "true",
    username_suggestions_enabled: "true"
});

// ============================================================
// 5. MOMENTS, STREAK, CHAT & TƯƠNG TÁC
// ============================================================
try {
    var streak = JSON.parse(obj.entries.streak_config || "{}");
    streak.enabled = true;
    streak.show_streak = true;
    streak.minimum_recovery_count = 0;
    streak.minimum_display_count = 0;
    obj.entries.streak_config = JSON.stringify(streak);
} catch (e) { }

Object.assign(obj.entries, {
    moment_views_enabled: "true",
    moment_views_v2: "true",
    record_moment_views: "true",
    notify_moment_views: "true",
    get_moment_views_as_cloud_function: "true",
    moment_reactions_v2: "true",
    chat_reactions_enabled: "true",
    conversation_reactions: "true",
    typing_indicators_enabled: "true",
    unsend_message_enabled: "true",
    reply_prototype_enabled: "true",
    messages_integration: "true",
    conversations_enabled: "true",
    fetch_moments_in_conversation: "true",
    hide_chat_button: "false",
    groups_enabled: "true",
    group_contact_invites_enabled: "true",
    groups_onboarding_accept_invite_preview_enabled: "true",
    chat_hyperlink_enabled_mode: "always_enabled",
    conversation_drafts_enabled: "true",
    send_to_self_only_mode: "always_enabled",
    time_travel_rewind_v2_enabled: "true",
    calendar_delete_moment_enabled: "true",
    calendar_rewind_enabled: "false",
    locket_yearbook_story_sharing_encouraged: "true",
    rollcall_enabled: "true",
    rollcall_comment_actions: "true",
    rollcall_profile_button: "true",
    rollcall_prompt_export_after_share: "true",
    rollcall_confirm_skip_tagging: "false",
    rollcall_tap_to_tag_enabled: "false"
});

// ============================================================
// 6. WIDGET, KHUNG VIỀN, ĐỊA CHỈ & FOCUS
// ============================================================
Object.assign(obj.entries, {
    widget_frame_event_max_images: "10",
    android_widget_frame_event_enabled: "true",
    widget_badge_enabled: "true",
    widget_badge_v2: "true",
    widget_stale_state_enabled: "false",
    widget_last_sent_indicator: "false",
    widget_sync_token_reload_mode: "clearTokenNever",

    custom_widget_frames: "enabled",
    custom_widget_frames_enabled: "true",

    widget_frames_config: JSON.stringify({
        enabled: true,
        allow_custom_frames: true,
        unlock_all_styles: true,
        default_style: "royal_gold_vip",
        styles: [
            {
                id: "royal_gold_vip",
                name: "👑 VIP Royal Gold",
                border_style: "ornate_gold",
                crown_badge: true,
                badge_text: "VIP",
                corner_radius: 28.0,
                glow_effect: true,
                glow_color: "#FFD700",
                overlay_asset: "royal_crown_frame"
            },
            {
                id: "verified_blue_vip",
                name: "💎 Tích Xanh Verified VIP",
                border_style: "ornate_gold",
                crown_badge: true,
                badge_text: "VERIFIED",
                corner_radius: 28.0,
                glow_effect: true,
                glow_color: "#1D9BF0",
                overlay_asset: "royal_crown_frame"
            }
        ]
    }),

    widget_frame_styles: JSON.stringify([
        "royal_gold_vip",
        "verified_blue_vip",
        "gold_luxury",
        "classic"
    ]),

    seasonal_frames_config: JSON.stringify({
        enabled: true,
        auto_rotate: false,
        override_default: true,
        current_season_theme: "royal_gold_vip"
    }),

    live_activity_onboarding: "true",
    live_activity_onboarding_variant: "friending",
    register_live_activity_push_to_start_token: "true",
    live_activity_remove_stale_start_token: "true",
    notification_preferences_live_activities: "true",
    notification_preferences: "true",
    notification_reply_body_visible: "true",
    prompt_notification_permissions_after_friending: "true",
    activity_bar_enabled: "true",
    journal_activity_bar_enabled: "true",

    journal_settings: JSON.stringify({
        debug_menu_enabled: false,
        focus_animation: true,
        compact_header: true,
        friends_button: true,
        reverse_scroll_direction: false,
        streak_visualization: true,
        streak_visualization_style: "gradient",
        streak_header_minimum_count: 0,
        streak_visualization_minimum_count: 1,
        overlay_indicators: {
            location: true,
            music: true,
            static_content: true,
            weather: true
        }
    }),

    qr_code_config: JSON.stringify({ profile_enabled: true, scanning_enabled: true }),
    custom_profile_pics: "true",
    profile_menu_v2_enabled: "true"
});

// ============================================================
// 7. HỆ THỐNG CDN, CACHE & STORAGE
// ============================================================
Object.assign(obj.entries, {
    storage_bucket: "gs://locket-img",
    storage_bucket_video: "gs://locket-video",
    image_cache_max_age_sec: "157680000",
    image_cache_max_size: "400000000",
    history_cache_age_days: "1000",
    user_cache_max_age_sec: "86400",
    friends_cache_max_age_sec: "86400",
    image_fetch_cache: "true",
    image_cache_use_shared: "true",
    use_doc_dir_for_image_cache: "true",
    efficient_history_cache_invalidation: "true",
    timestamp_based_history_fetches: "true",
    get_latest_moment_v2: "true",
    fetch_users_from_cloud_function: "false",
    refresh_interval: "60",
    firestore_refresh_v2: "true",
    firestore_refresh_v3: "true",
    keychain_access_retries: "true",
    blocked_users_cached_sync_enabled: "true",
    beta_features_enabled: "true",
    join_testflight_enabled: "true",
    safety_center: "true",
    help_center: "true",
    support_v2: "true",
    privacy_choices_setting: "true",
    request_att_permission: "true",
    invite_link_preview_variant: "4",
    share_history_config: JSON.stringify({ prompt_enabled: false, fetching_enabled: true }),
    share_history_prompt_enabled: "false",
    use_thumbnails_for_sharing: "true",
    use_thumbnails_in_timeline: "true",
    persist_onboarding_step: "true",
    onboarding_contact_permission_step: "true"
});

// ============================================================
// 8. OVERLAY & CUSTOM CAPTIONS
// ============================================================
Object.assign(obj.entries, {
    overlay_navigator_enabled: "true",
    overlays_v2_config: JSON.stringify({ suggestions_enabled: true }),
    captions_enabled: "true",
    music_caption_enabled: "true",
    music_caption_song_preview_enabled: "true",
    link_caption_link_enabled: "true",
    overlay_dynamic_captions: JSON.stringify([
        "standard", "poll", "color_palette", "review", "music", "location",
        "weather", "time", "streak", "star_sign", "party_time", "locket_count",
        "good_morning", "goodnight", "ootd", "miss_you", "custom"
    ])
});

// ============================================================
// 9. FORCE OVERRIDE GIÁ TRỊ GOLD & 45S
// ============================================================
function forceOverrideEntries(entries) {
    if (!entries || typeof entries !== "object") return;

    var durationKeys = [
        "max_video_duration", "video_max_duration", "camera_roll_max_duration",
        "camera_roll_video_max_duration", "camera_roll_duration",
        "video_trim_max_duration", "trim_max_duration", "gold_max_duration", "goldMaxDuration"
    ];
    for (var i = 0; i < durationKeys.length; i++) {
        entries[durationKeys[i]] = "45.0";
    }

    entries["is_gold"] = "true";
    entries["has_gold"] = "true";
    entries["is_gold_user"] = "true";
    entries["user_is_gold"] = "true";
    entries["gold_user"] = "true";
    entries["gold_active"] = "true";
    entries["all_filters_free"] = "true";
    entries["unlocked_filters"] = "true";
    entries["free_filters_enabled"] = "true";
    entries["filter_selection_enabled"] = "true";
    entries["require_gold_for_filters"] = "false";
    entries["requires_gold_for_filters"] = "false";
    entries["camera_filter_gold_only"] = "false";
    entries["camera_filters_gold_only"] = "false";
    entries["filter_gold_only"] = "false";
    entries["filters_gold_only"] = "false";
    entries["ai_filter_gold_only"] = "false";
    entries["ai_filters_gold_only"] = "false";
    entries["filter_paywall_enabled"] = "false";
    entries["camera_filter_paywall_enabled"] = "false";
    entries["filter_upsell_enabled"] = "false";

    entries["cache_ttl_seconds"] = "0";
    entries["client_cache_ttl_sec"] = "0";
}
forceOverrideEntries(obj.entries);

$done({
    body: JSON.stringify(obj)
});
