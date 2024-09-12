
export const config = {
  authTokens: process.env.AUTH_TOKENS ? process.env.AUTH_TOKENS.split(",") : [],
  defaultQueuePrefix: process.env.QUEUE_PREFIX || "bull",
  port: parseInt(process.env.PORT || "8080", 10),
  redis: {
    url: process.env.REDIS_URL || undefined,
  },
  queueCacheSize: process.env.QUEUE_CACHE_SIZE ? parseInt(process.env.QUEUE_CACHE_SIZE) : 100,
  debugEnabled: process.env.DEBUG === "true",
  minQueueNameLength: process.env.MIN_QUEUE_NAME_LENGTH ? parseInt(process.env.MIN_QUEUE_NAME_LENGTH) : 3,
  maxQueueNameLength: process.env.MAX_QUEUE_NAME_LENGTH ? parseInt(process.env.MAX_QUEUE_NAME_LENGTH) : 100,
  workerMetadataKey: process.env.WORKER_METADATA_KEY || "bmqp:w:meta",
  workerMetadataStream: process.env.WORKER_METADATA_KEY || "bmpq:w:stream",
  maxLenWorkerMetadataStream:
    process.env.MAX_LEN_WORKER_METADATA_STREAM ? parseInt(process.env.MAX_LEN_WORKER_METADATA_STREAM) : 100,
}
