import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

class AddAvatarFieldToUsers1607128417464 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'avatar',
        type: 'varchar',
        isNullable: true
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'avatar')
  }
}

export default AddAvatarFieldToUsers1607128417464
