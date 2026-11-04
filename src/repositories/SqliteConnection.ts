import Database from "better-sqlite3";

export class SqliteConnection {

    private database: Database.Database;

    constructor(databaseFilePath: string) {
        this.database = new Database(databaseFilePath);
    }

    public getDatabase(): Database.Database {
        return this.database;
    }

}