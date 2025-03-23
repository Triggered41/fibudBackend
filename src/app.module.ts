import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExpertController } from './ExpertModule/expert.controller.';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ExpertService } from './ExpertModule/expert.service';
import { ExpertModule } from './ExpertModule/expert.module';
import { ClientModule } from './ClientModule/client.module';
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      serveRoot: ''
    }),
    ExpertModule,
    ClientModule
  ],
  // controllers: [AppController, ExpertController],
  // providers: [AppService, ExpertService],
})
export class AppModule {}
