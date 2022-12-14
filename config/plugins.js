module.exports = ({env}) => {
  return {
    ckeditor: true,
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          accessKeyId: env('S3_ACCESS_KEY_ID', '232f8dvfc3lr5m6n'),
          secretAccessKey: env('S3_ACCESS_SECRET', 'bb655020-65a4-4fd7-a490-5c5b6dee2e35'),
          endpoint: env("S3_ENDPOINT", 'storage.iran.liara.space'),
          params: {
            Bucket: env('S3_BUCKET', '11s'),
          },
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
  }
}
