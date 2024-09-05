/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProcessedBlogPostWhereInput } from "./ProcessedBlogPostWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ProcessedBlogPostOrderByInput } from "./ProcessedBlogPostOrderByInput";

@ArgsType()
class ProcessedBlogPostFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ProcessedBlogPostWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ProcessedBlogPostWhereInput, { nullable: true })
  @Type(() => ProcessedBlogPostWhereInput)
  where?: ProcessedBlogPostWhereInput;

  @ApiProperty({
    required: false,
    type: [ProcessedBlogPostOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ProcessedBlogPostOrderByInput], { nullable: true })
  @Type(() => ProcessedBlogPostOrderByInput)
  orderBy?: Array<ProcessedBlogPostOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ProcessedBlogPostFindManyArgs as ProcessedBlogPostFindManyArgs };