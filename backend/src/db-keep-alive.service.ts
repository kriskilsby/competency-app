// backend/src/db-keep-alive.service.ts
// import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
// import { DataSource } from 'typeorm';

// ### Removed whilst I use the paid Azure tier which keeps connections alive automatically ###
// @Injectable()
// export class DbKeepAliveService implements OnModuleInit {
//   private readonly logger = new Logger(DbKeepAliveService.name);

//   constructor(private readonly dataSource: DataSource) {}

//   onModuleInit() {
//     // Run immediately on startup
//     this.pingDatabase();

//     // Then every 5 minutes (300000ms)
//     setInterval(() => {
//       this.pingDatabase();
//     }, 5 * 60 * 1000);
//   }

//   private async pingDatabase() {
//     try {
//       await this.dataSource.query('SELECT 1');
//       this.logger.log('DB keep-alive ping successful');
//     } catch (error) {
//       this.logger.error('DB keep-alive ping failed', error);
//     }
//   }
// }
