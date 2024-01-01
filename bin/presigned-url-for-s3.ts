#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { PresignedUrlForS3Stack } from '../lib/presigned-url-for-s3-stack';

const app = new cdk.App();
new PresignedUrlForS3Stack(app, 'PresignedUrlForS3Stack');
