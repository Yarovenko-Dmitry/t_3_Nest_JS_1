import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";

@Module({
    controllers: [],
    providers: [],
    imports: [
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'root',
            database: 'test-nest-project',
            models: [],
            autoLoadModels: true,
        }),
    ]
})

export class AppModule {
}
