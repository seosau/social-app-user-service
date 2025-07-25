import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { IsEmail, IsString, MinLength } from 'class-validator';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    @IsString()
    fullName: string;

    @Column({unique: true})
    @IsEmail()
    email: string;

    @Column()
    @MinLength(6)
    password: string;

    @Column({ nullable: true })
    @IsString()
    image: string ;
    
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}
