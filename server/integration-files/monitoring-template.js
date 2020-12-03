/*
 * Wazuh app - Module for monitoring template
 * Copyright (C) 2015-2019 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
export const monitoringTemplate = {
  order: 0,
  settings: {
      index: {
        routing: {
          allocation: {
            require: {
              'storage-tier': 'hot'
            }
          }
        },
        'refresh_interval': '5s',
        'number_of_shards': '3',
        'auto_expand_replicas': '0-3',
        'number_of_replicas': '3'
      }
  },
  mappings: {
    'wazuh-agent': {
      properties: {
        '@timestamp': {
          type: 'date',
          format: 'dateOptionalTime'
        },
        status: {
          type: 'keyword'
        },
        ip: {
          type: 'keyword'
        },
        host: {
          type: 'keyword'
        },
        name: {
          type: 'keyword'
        },
        id: {
          type: 'keyword'
        },
        cluster: {
          properties: {
            name: {
              type: 'keyword'
            }
          }
        }
      }
    }
  }
};
