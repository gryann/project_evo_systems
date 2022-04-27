import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateFunctionaries implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table ({
                name: "functionaries",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "image",
                        type: "varchar",
                        isUnique: false
                    },
                    {
                        name: "RG",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "id_departament",
                        type: "uuid",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
                foreignKeys: [
                    {
                        name: "fk_dep_functionary",
                        columnNames: ["id_departament"],
                        referencedTableName: "departaments",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("functionaries");
    }

}
