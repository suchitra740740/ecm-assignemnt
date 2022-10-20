import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";
import { Tag } from "orm/entities/tags/Tag";
import { v4 } from "uuid";

function getTakeAndSkip(pageNumber: number, pageSize: number) {
  const limit = pageSize;
  const skip = pageNumber > 0 ? (pageNumber - 1) * limit : 0;
  const take = limit > 0 ? limit : 0;
  return { take, skip };
}

export async function getTagsForClub(
  searchString: string,
  club_uuid: string,
  pagination: {
    pageNumber: number, pageSize: number
  }
) {
  // const tags: Tag[] = await getRepository(Tag).query(`
  //     SELECT 
  //         *
  //     FROM tags
  //     where '${searchString}' % ANY(STRING_TO_ARRAY(value ,' ')) and club_uuid = '${club_uuid}'
  //     ORDER BY SIMILARITY(value,'${searchString}') DESC
  //     LIMIT 5;
  //   `);

  const paginationQuery = getTakeAndSkip(pagination.pageNumber, pagination.pageSize);
  let tagsGetQuery = getRepository(Tag).createQueryBuilder("tag")
    .where(`tag.club_uuid = :club_uuid`, { club_uuid: club_uuid })
  if (searchString && searchString.length > 0) {
    tagsGetQuery.andWhere(`:query % ANY(STRING_TO_ARRAY(value,' '))`, { query: searchString })
    // tagsGetQuery.orderBy('tag.created_at' ,'DESC')
  }
  tagsGetQuery.orderBy('tag.value' ,'ASC');
  tagsGetQuery.take(paginationQuery.take);
  tagsGetQuery.skip(paginationQuery.skip);
  const tags = await tagsGetQuery.getMany();
  return tags;
}
