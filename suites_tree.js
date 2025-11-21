window.suitesTreeJson = {
  "Smoke Tests": {
    "//genesis/datasets": [
      "//genesis/datasets:datasets_test"
    ],
    "//genesis/salesforce/account_id_updater": [
      "//genesis/salesforce/account_id_updater:account_id_updater_test"
    ],
    "//genesis/salesforce/account_updater": [
      "//genesis/salesforce/account_updater:account_updater_test"
    ],
    "//genesis/salesforce/generator": [
      "//genesis/salesforce/generator:generator_test"
    ],
    "//genesis/salesforce/incremental_updates": [
      "//genesis/salesforce/incremental_updates:merge_singer_test"
    ]
  },
  "Nightly Tests": {
    "//matrix/apihandler/ops": [
      "//matrix/apihandler/ops:compute_velocity_fiscal_weeks_op_test",
      "//matrix/apihandler/ops:map_fiscal_period_op_test"
    ],
    "//matrix/apihandler/test": [
      "//matrix/apihandler/test:apihandler_test",
      "//matrix/apihandler/test:apihandler_unicluster_test"
    ],
    "//matrix/dealscoring/apihandler/test": [
      "//matrix/dealscoring/apihandler/test:apihandler_test",
      "//matrix/dealscoring/apihandler/test:apihandler_unicluster_test"
    ],
    "//matrix/dealscoring/matview/schema/test": [
      "//matrix/dealscoring/matview/schema/test:ds_matview_schema_test"
    ],
    "//matrix/defaults": [
      "//matrix/defaults:defaults_test"
    ],
    "//matrix/forecasting/apihandler/ops": [
      "//matrix/forecasting/apihandler/ops:compute_deviations_op_test",
      "//matrix/forecasting/apihandler/ops:get_across_reporting_period_forecasting_trends_op_test",
      "//matrix/forecasting/apihandler/ops:get_human_forecast_op_test",
      "//matrix/forecasting/apihandler/ops:get_in_reporting_period_forecasting_trends_op_test",
      "//matrix/forecasting/apihandler/ops:get_reporting_period_forecast_op_test",
      "//matrix/forecasting/apihandler/ops:set_human_forecast_op_test"
    ],
    "//matrix/forecasting/apihandler/test": [
      "//matrix/forecasting/apihandler/test:forecasting_unicluster_test",
      "//matrix/forecasting/apihandler/test:integration_tests"
    ],
    "//matrix/forecasting/matview/ops": [
      "//matrix/forecasting/matview/ops:generate_forecast_category_vector_op_test",
      "//matrix/forecasting/matview/ops:generate_monthly_forecast_op_test"
    ],
    "//matrix/forecasting/matview/schema": [
      "//matrix/forecasting/matview/schema:forecasting_heatmap_schema_helpers_test"
    ],
    "//matrix/incremental": [
      "//matrix/incremental:incremental_test"
    ],
    "//matrix/mcpproxy/httphandlers": [
      "//matrix/mcpproxy/httphandlers:httphandlers_test"
    ],
    "//matrix/pipeline/apihandler/ops": [
      "//matrix/pipeline/apihandler/ops:get_pipeline_creation_velocity_op_test",
      "//matrix/pipeline/apihandler/ops:get_pipeline_heatmap_op_test",
      "//matrix/pipeline/apihandler/ops:get_pipeline_targets_op_test",
      "//matrix/pipeline/apihandler/ops:get_targeted_pipeline_trends_op_test",
      "//matrix/pipeline/apihandler/ops:get_user_pipeline_targets_op_test",
      "//matrix/pipeline/apihandler/ops:infer_creation_pipeline_goal_op_test"
    ],
    "//matrix/pipeline/matview/schema/test": [
      "//matrix/pipeline/matview/schema/test:matview_schema_test"
    ],
    "//matrix/pipeline/matview/test": [
      "//matrix/pipeline/matview/test:generate_pipeline_heat_map_op_test"
    ],
    "//matrix/schema": [
      "//matrix/schema:schema_test"
    ],
    "//matrix/transform": [
      "//matrix/transform:transform_test"
    ]
  },
  
  "Weekly Tests": {
    "//spectrum": [
      "//spectrum:spectrum_test"
    ],
    "//spectrum/app-core": [
      "//spectrum/app-core:eslint",
      "//spectrum/app-core:vitest"
    ],
    "//spectrum/components": [
      "//spectrum/components:eslint",
      "//spectrum/components:vitest"
    ],
    "//spectrum/dashboard": [
      "//spectrum/dashboard:dashboard_test"
    ],
    "//spectrum/dashboard/ui": [
      "//spectrum/dashboard/ui:eslint",
      "//spectrum/dashboard/ui:vitest"
    ],
    "//spectrum/host-app": [
      "//spectrum/host-app:build_smoke_test",
      "//spectrum/host-app:eslint",
      "//spectrum/host-app:vitest"
    ],
    "//spectrum/test": [
      "//spectrum/test:spectrumtest",
      "//spectrum/test:spectrumtest_auth",
      "//spectrum/test:spectrumtest_binary"
    ],
    "//spectrum/widget-core": [
      "//spectrum/widget-core:widget_core_test"
    ],
    "//spectrum/widget-core/ui": [
      "//spectrum/widget-core/ui:eslint",
      "//spectrum/widget-core/ui:vitest"
    ],
    "//spectrum/widgets/ui": [
      "//spectrum/widgets/ui:eslint",
      "//spectrum/widgets/ui:vitest"
    ]
  },
  "P0 Tests": {
    "//morpheus/apihandler/test": [
      "//morpheus/apihandler/test:apihandler_test",
      "//morpheus/apihandler/test:apihandler_test_salesforce",
      "//morpheus/apihandler/test:apihandler_unicluster_test",
      "//morpheus/apihandler/test:apihandler_unicluster_test_salesforce"
    ]
  },
  "P1 Tests": {
    "//mysterio/apihandler": [
      "//mysterio/apihandler:apihandler_test"
    ],
    "//mysterio/mockapi": [
      "//mysterio/mockapi:mock_mysterioapi_test"
    ],
    "//mysterio/mysteriotest": [
      "//mysterio/mysteriotest:mysteriotest"
    ]
  },
  "P2 Tests": {
    "//openutil/base/aes": [
      "//openutil/base/aes:aes_test"
    ],
    "//openutil/base/disjointrangeset": [
      "//openutil/base/disjointrangeset:disjointrangeset_test"
    ],
    "//openutil/base/jsonutil": [
      "//openutil/base/jsonutil:jsonutil_test"
    ],
    "//openutil/base/logger": [
      "//openutil/base/logger:logger_test"
    ],
    "//openutil/base/lrucache": [
      "//openutil/base/lrucache:lrucache_test"
    ],
    "//openutil/base/slidingwindow": [
      "//openutil/base/slidingwindow:histogram_test",
      "//openutil/base/slidingwindow:stat_test"
    ],
    "//openutil/base/string": [
      "//openutil/base/string:string_test"
    ],
    "//openutil/concurrency/idlocker": [
      "//openutil/concurrency/idlocker:idlocker_test"
    ],
    "//openutil/errorproto": [
      "//openutil/errorproto:errorproto_test"
    ],
    "//openutil/misc/memtracer": [
      "//openutil/misc/memtracer:memtracer_test"
    ],
    "//openutil/misc/op": [
      "//openutil/misc/op:op_test",
      "//openutil/misc/op:opidissuer_test",
      "//openutil/misc/op:parallel_subop_executor_test"
    ],
    "//openutil/misc/program": [
      "//openutil/misc/program:program_test"
    ],
    "//openutil/net/grpcclient": [
      "//openutil/net/grpcclient:grpcclient_test"
    ],
    "//openutil/net/grpcinterceptor": [
      "//openutil/net/grpcinterceptor:grpcinterceptor_test"
    ],
  }
}