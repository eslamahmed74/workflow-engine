import { Column } from 'typeorm';
import { BaseEntity } from './BaseEntity.js';

export class ServiceEntity extends BaseEntity {
  @Column({ type: 'bigint', nullable: true })
  requesterUsrId: string | null = null;

  
}
